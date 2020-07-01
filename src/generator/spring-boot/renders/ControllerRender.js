const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { ReqUtils } = require("../ReqUtils");
const { STR } = require("../../../libs/str");
const { isJavaBaseType } = require("../utils");

const CONTROLLER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/controller-item.java`);
const CONTROLLER_BATCH_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/controller-batch-item.java`);
const CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/controller.java`);

const HTTP_MAPPINGS = new Map();

// map by sql statement type
HTTP_MAPPINGS.set("select", "@GetMapping")
        .set("update", "@PutMapping")
        .set("delete", "@DeleteMapping")
        .set("insert", "@PostMapping");

class ControllerRender {
        /**
         * Render controller template
         * 
         * @param {ConfigGroup} configGroup 
         * @returns {String}
         */
        renderController(configGroup) {
                let content = STR.arrayToString1(
                        configGroup.items,
                        configItem => {
                                return ReqUtils.hasBatchReq(configItem)
                                ?CONTROLLER_BATCH_ITEM_RENDER.renderTemplate(this._getRequestMethodConfig(configItem, configGroup.name))
                                :CONTROLLER_ITEM_RENDER.renderTemplate(this._getRequestMethodConfig(configItem, configGroup.name))
                        }
                );

                content = content.trimRight() + "\r\n";

                let description = `${configGroup.table.description || configGroup.name}`;
                return CONTROLLER_RENDER.renderTemplate({ description, content, sname: STR.lowerFirstLetter(configGroup.name) });
        }

        /**
         * Get controller item config
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getRequestMethodConfig(configItem, configName) {
                let description = configItem.controller.description || "";
                description = description.replace(/\r\n/g, "");
                return {
                        methodName: configItem.id,
                        httpMapping: this._getHttpAnnotationg(configItem),
                        returnType: this._getControllerReturnType(configItem, configName),
                        serviceArgs: ReqUtils.generateReqArgsWithoutType(configItem),
                        description,
                        args: this._getArgs(configItem),
                        sname: STR.lowerFirstLetter(configName),
                        serviceReturnType: this._getServiceReturnType(configItem, configName),
                        resultName: this._getResultName(configItem),
                        response: this._getResponse(configItem, this._getResultName(configItem)),
                        expected:ReqUtils.hasBatchReq(configItem)?this._getBatchExpected(configItem):""
                };
        }

        /**
         * Get controler item params text
         * 
         * note special fiedls
         * a) session attribute
         * b) path variable
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getArgs(configItem) {
                let args = "";
                configItem.reqs.forEach(req => {
                        req.from = req.from || "";
                        if (isJavaBaseType(req.type)) {
                                if (!req.isList) {
                                        args += `${req.from} ${req.type} ${req.name}, `.trimLeft();
                                        return;
                                }
                                args += `${req.from} List<${req.type}> ${req.name}, `.trimLeft();

                                return;
                        }
                       
                        if (!req.isList) {
                                args += `${req.from} @Validated @ModelAttribute ${req.type} ${req.name}, `.trimLeft();
                                return;
                        }

                        // batch with list
                        args += `${req.from} @Validated @ModelAttribute List<${req.type}> ${req.name}, `.trimLeft();
                });

                return STR.removeLastComa(args);
        }

        /**
         * Get controller ite http mapping annotation 
         * |GetMapping|PostMapping|DeleteMapping|PutMapping
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getHttpAnnotationg(configItem) {
                if (!HTTP_MAPPINGS.has(configItem.type))
                        throw new Error(`unexceted type(${configItem.type})`);

                let path = configItem.controller.path || `/${this.config.name}/${configItem.id}`;

                return `${HTTP_MAPPINGS.get(configItem.type)}(path = "${path}")`;
        }

        /**
         * Get controller item return type R|R<Page<Model>>|R<List<Model>>
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} configName
         * @returns {String}
         */
        _getControllerReturnType(configItem, configName) {
                if (configItem.type != "select")
                        return "R";

                // single or page info
                if (configItem.resp.single) {
                        return configItem.resp.doCreate
                                ? `R<${STR.upperFirstLetter(configItem.resp.type)}>`
                                : `R<${configName}>`;
                } else if (configItem.resp.list) {
                        return configItem.resp.doCreate
                                ? `R<List<${STR.upperFirstLetter(configItem.resp.type)}>>`
                                : `R<List<${configName}>>`;

                } else {
                        return configItem.resp.doCreate
                                ? `R<PageResult<${STR.upperFirstLetter(configItem.resp.type)}>>`
                                : `R<PageResult<${configName}>>`;
                }
        }

        /**
         * Get method return type
         * 1. select
         *   a) docreate
         *     1> single -> resp
         *     2> list -> list<resp>
         *     3> page -> page<resp> 
         *   b) not doCreate   
         *     1> single -> entity
         *     2> list -> list<entity>
         *     3> page -> page<entity> 
         * 2. other
         *     batch -> int or boolean
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName 
         * @returns {String}
         */
        _getServiceReturnType(configItem, tableName) {
                if (configItem.type != "select")
                        return ReqUtils.hasBatchReq(configItem) ? "int" : "boolean";

                if (configItem.resp.doCreate) {
                        return configItem.resp.single
                                ? STR.upperFirstLetter(configItem.resp.type)
                                : configItem.resp.list ? `List<${STR.upperFirstLetter(configItem.resp.type)}>`
                                        : `PageResult<${STR.upperFirstLetter(configItem.resp.type)}>`
                }

                return configItem.resp.single
                        ? STR.upperFirstLetter(tableName)
                        : configItem.resp.list ? `List<${STR.upperFirstLetter(tableName)}>`
                                : `PageResult<${STR.upperFirstLetter(tableName)}>`

        }

        /**
         * Get result variable name
         * possible
         * 'result' in normal condition and 'succeed' in batch condition
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getResultName(configItem) {
                return ReqUtils.hasBatchReq(configItem) ? "succeed" : "result";
        }

        /**
         * Get 'return-part' content
         * 
         * @param {ConfigItem} configItem 
         * @param {String} resultName 
         * @returns {String}
         */
        _getResponse(configItem, resultName) {
                if (configItem.type == "select")
                        return `responseData(${resultName})`;

                if (ReqUtils.hasBatchReq(configItem))
                        return `responseBatch(${resultName}, expected)`;

                return `responseBoolean(${resultName})`;
        }

        /**
         * Get expected succeed row content
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getBatchExpected(configItem) {
                if (configItem.type == "update") {
                        return `int expected = ${ReqUtils.getDoCreateReq(configItem).name}.get${STR.upperFirstLetter(ReqUtils.getBatchReqName(configItem))}s().size()`;
                } else if (configItem.type == "insert") {
                        return `int expected = ${ReqUtils.getDoCreateReq(configItem).name}.size()`;
                } else {
                        return `int expected = ${ReqUtils.getBatchReqName(configItem)}.size()`;
                }
        }

}

exports.ControllerRender = ControllerRender