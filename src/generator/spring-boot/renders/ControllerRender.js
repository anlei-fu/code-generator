const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { ReqUtils } = require("../ReqUtils");
const { STR } = require("../../../libs/str");
const { isJavaBaseType } = require("../utils");
const { ConfirItemUtils } = require("./../ConfigItemUtils");
const { ConfigGroup } = require("./../builders/ConfigGroup");
const { ConfigItem } = require("./../builders/ConfigItem");
const { NamingStrategy } = require("../../../libs");

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
                                        ? CONTROLLER_BATCH_ITEM_RENDER.renderTemplate(this._getRequestMethodConfig(configItem, configGroup.name))
                                        : CONTROLLER_ITEM_RENDER.renderTemplate(this._getRequestMethodConfig(configItem, configGroup.name))
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
                        serviceReturnType: ConfirItemUtils.getServiceReturnType(configItem, configName),
                        resultName: this._getResultName(configItem),
                        response: this._getResponse(configItem, this._getResultName(configItem)),
                        expected: ReqUtils.hasBatchReq(configItem) ? this._getBatchExpected(configItem) : ""
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
                                args += `${req.from} @Validated ${req.type} ${req.name}, `.trimLeft();
                                return;
                        }

                        // batch with list
                        args += `${req.from} @Validated List<${req.type}> ${req.name}, `.trimLeft();
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

                // TODO
                let path = configItem.controller.path;
                return path ? `${HTTP_MAPPINGS.get(configItem.type)}(path = "${path}")` : `${HTTP_MAPPINGS.get(configItem.type)}`;
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
         * Get '@result' variable name
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
         * Get '@response' varible
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