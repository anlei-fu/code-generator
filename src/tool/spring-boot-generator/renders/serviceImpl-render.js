const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { ReqUtils } = require("../req-utils");
const { STR } = require("./../../../libs/str");

const SERVICE_IMPL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_PAGE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-page.java`);
const SERVICE_IMPL_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

class ServiceImplRender {
        /**
         * Render service impl template
         * 
         * @param {ConfigGroup} configGroup 
         * @returns {String}
         */
        renderServiceImpl(configGroup) {
                let content = "";
                configGroup.items.forEach(x => {
                        let item = this._getMethodConfig(x, configGroup.name);
                        content += x.type == "select" && !x.resp.single
                                ? STR.removeEmptyLine(SERVICE_IMPL_PAGE_ITEM_RENDER.renderTemplate(item)) + "\r\n"
                                : STR.removeEmptyLine(SERVICE_IMPL_ITEM_RENDER.renderTemplate(item)) + "\r\n";
                });

                content = content.trimRight() + "\r\n";
                return SERVICE_IMPL_RENDER.renderTemplate({
                        name: configGroup.name,
                        content,
                        sname: STR.lowerFirstLetter(configGroup.name)
                });
        }

        /**
         * Get service impl item config
         *  public @serviceImplReturnType  @name(@serviceImplParams){
         *         @content
         *       return @mapper(@serviceImplMapperParams)@suffix;
         *  }
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getMethodConfig(configItem, tableName) {
                return {
                        methodName: configItem.id,
                        args: ReqUtils.generateReqParamsWithType(configItem),
                        returnType: this._getReturnType(configItem, tableName),
                        mapperArgs: configItem.params.doCreate
                                ? "params" : ReqUtils.generateReqParamsWithoutType(configItem),

                        suffix: configItem.type == "select" ?ReqUtils.hasBatchReq(configItem) ? "" : " > 0" : "",
                        content: !configItem.params.doCreate ? "" : this._renderMethodContent(configItem),
                        sname: STR.lowerFirstLetter(tableName)
                };
        }

        /**
         * Render service impl content  template
         * if params ,create instance and set default values
         * 
         * @private
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _renderMethodContent(configItem) {

                let content = "";
                if (!ReqUtils.hasBatchReq(configItem)) {
                        content = `${configItem.params.type} params = new ${configItem.params.type}(@params);`;
                        content = content.replace("@params", ReqUtils.generateReqParamsWithoutType(configItem));

                        // if has default values, generate set expression
                        if (configItem.params.defaultValues) {
                                configItem.params.defaultValues.forEach((value, key) => {
                                        content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                                });
                        }

                        return content;
                } else {
                        let reqType = "";
                        let reqName = "";
                        content = `List<${configItem.params.type}> params = new ArrayList<>;\r\n`;
                        content += `        for ( final type item : req) {\r\n                params.add(new ${configItem.params.type}(@params)); \r\n        }`;
                        content = content.replace("@params", ReqUtils.generateReqParamsWithoutType(configItem));
                }

                return content;
        }

        /**
         * Get service impl item return type text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName
         * @returns {String} 
         */
        _getReturnType(configItem, tableName) {
                if (configItem.type == "select")
                        return ReqUtils.hasBatchReq(configItem) ? "int" : "boolean";

                return configItem.resp.single
                        ? configItem.resp.doCreate ? STR.upperFirstLetter(configItem.resp.type) : tableName
                        : configItem.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(configItem.resp.type)}>` : `PageInfo<${tableName}>`;
        }
}

exports.ServiceImplRender = ServiceImplRender;