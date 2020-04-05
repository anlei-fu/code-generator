const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { ReqUtils } = require("../req-utils");
const { STR } = require("./../../../libs/str");

const SERVICE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/service-item.java`);
const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.java`);

class ServiceRender {
        /**
         * Render service template
         * 
         * @param {service} config 
         * @returns {String}
         */
        renderService(config) {
                let content = STR.arrayToString1(config.items,
                        x => SERVICE_ITEM_RENDER.renderTemplate(this._getServiceItemModel(x, config.name)));

                content = content.trimRight() + "\r\n";
                return SERVICE_RENDER.renderTemplate({ content });
        }

        /**
         * Get service item template
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getServiceItemModel(config, name) {
                return {
                        serviceParams: ReqUtils.generateReqParamsWithType(config),
                        serviceReturnType: this._getServiceReturnType(config, name),
                        name: config.id
                };
        }

        /**
         * Get service return type text
         * 
         * @private
         * @param {Config} config 
         * @param {String} name
         * @returns {String} 
         */
        _getServiceReturnType(config, name) {
                if (config.type != "select")
                        return ReqUtils.hasBatchReq(config) ? "int" : "boolean";

                return config.resp.single
                        ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                        : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${name}>`;
        }
}

exports.ServiceRender = ServiceRender;