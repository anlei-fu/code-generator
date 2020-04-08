const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { ReqUtils } = require("../req-utils");
const { STR } = require("./../../../libs/str");
const { isJavaBaseType } = require("./../utils");

const CONTROLLER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/controller-item.java`);
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
                let content = STR.arrayToString1(configGroup.items,
                        configItem => CONTROLLER_ITEM_RENDER.renderTemplate(this._getRequestMethodConfig(configItem, configGroup.name)));

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
                        returnType: this._getReturnType(configItem, configName),
                        serviceArgs: ReqUtils.generateReqParamsWithoutType(configItem),
                        description,
                        args: this._getArgs(configItem),
                        sname: STR.lowerFirstLetter(configName),
                };
        }

        /**
         * Get controler item params text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getArgs(configItem) {
                let args = "";
                configItem.reqs.forEach(req => {
                        if (isJavaBaseType(req.type)) {
                                if (!req.isBatch) {
                                        args += `${req.from} ${req.type} ${req.name}, `.trimLeft();
                                        return;
                                }
                                args += `${req.from} List<${req.type}> ${req.name}, `.trimLeft();

                                return;
                        }

                        req.from = req.from || "";
                        if (!req.isBatch) {
                                args += `${req.from} @Validated @ModelAttribute ${req.type} ${req.name}, `.trimLeft();
                                return;
                        }

                        // batch with list
                        args += `${req.from} @Validated @ModelAttribute List<${req.type}> ${req.name}, `.trimLeft();
                });

                return STR.removeLastComa(args);
        }

        /**
         * Get controller ite http mapping annotation text
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
         * Get controller item return type text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} configName
         * @returns {String}
         */
        _getReturnType(configItem, configName) {
                if (configItem.type != "select")
                        return "R";

                // single or page info
                if (configItem.resp.single) {
                        return configItem.resp.doCreate
                                ? `R<${STR.upperFirstLetter(configItem.resp.type)}>`
                                : `R<${configName}>`;
                } else {
                        return configItem.resp.doCreate
                                ? `R<PageInfo<${STR.upperFirstLetter(configItem.resp.type)}>>`
                                : `R<PageInfo<${configName}>>`;
                }
        }
}

exports.ControllerRender = ControllerRender