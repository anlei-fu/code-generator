const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const {getReqParamsWithType}=require("./../req-common")
const _serviceItemRender = new SimpleRender({}, `${__dirname}/templates/service-item.java`);
const _serviceRender = new SimpleRender({}, `${__dirname}/templates/service.java`);

/**
 * 
 * @param {service} config 
 * @returns {String}
 */
function renderService(config) {
        let content = "";
        config.items.forEach(x => {
                let item = getServiceItem(x,config.name);
                content += _serviceItemRender.renderTemplate(item);
        });

        content=content.trimRight()+"\r\n";
        return _serviceRender.renderTemplate({ content });
}

/**
 * Get service interface item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceItem(config,name) {
        return {
                serviceParams: getReqParamsWithType(config),
                serviceReturnType: getServiceReturnType(config,name),
                name: config.id
        };
}

/**
 * 
 * @param {Config} config 
 * @param {String} name
 * @returns {String} 
 */
function getServiceReturnType(config,name) {
        if (config.type != "select")
                return "boolean";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${name}>`;
}

exports.renderService = renderService;