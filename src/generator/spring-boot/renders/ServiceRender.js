const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { ReqUtils } = require("../ReqUtils");
const { STR } = require("../../../libs/str");

const SERVICE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/service-item.java`);
const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.java`);

class ServiceRender {
        /**
         * Render service template
         * 
         * @param {ConfigGroup} configGroup 
         * @returns {String}
         */
        renderService(configGroup) {
                let content = STR.arrayToString1(configGroup.items,
                        configItem => SERVICE_ITEM_RENDER.renderTemplate(this._getMethodConfig(configItem, configGroup.name)));

                content = content.trimRight() + "\r\n";
                return SERVICE_RENDER.renderTemplate({ content });
        }

        /**
         * Get service item template
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getMethodConfig(configItem, tableName) {
                return {
                        args: ReqUtils.generateReqArgsWithType(configItem),
                        returnType: this._getReturnType(configItem, tableName),
                        methodName: configItem.id
                };
        }

        /**
         * Get service return type text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName
         * @returns {String} 
         */
        _getReturnType(configItem, tableName) {
                if (configItem.type != "select")
                        return ReqUtils.hasBatchReq(configItem) ? "int" : "boolean";

                return configItem.resp.single
                        ? configItem.resp.doCreate ? STR.upperFirstLetter(configItem.resp.type) : tableName
                        : configItem.resp.doCreate ? `PageResult<${STR.upperFirstLetter(configItem.resp.type)}>` : `PageResult<${tableName}>`;
        }
}

exports.ServiceRender = ServiceRender;