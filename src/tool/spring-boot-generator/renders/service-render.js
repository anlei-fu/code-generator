const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _serviceItemRender = new SimpleRender({}, `${__dirname}/templates/service-item.java`);
const _serviceRender = new SimpleRender({}, `${__dirname}/templates/service.java`);

/**
 * 
 * @param {service} service 
 * @returns {String}
 */
function renderService(service) {
        let content = "";
        service.items.forEach(x => {
                content += _serviceItemRender.renderTemplate(x);
        });

        return _serviceRender.renderTemplate({ content });
}

/**
 * Get service interface item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceItem(config) {
        return {
                serviceParams: this._getReqParamsWithType(config),
                serviceReturnType: this.getServiceReturnType,
                name: config.id
        };
}

function getServiceReturnType(config) {
        if (config.type != "select")
                return "boolean";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : this.config.name
                : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${this.config.name}>`;
}

exports.renderService = renderService;