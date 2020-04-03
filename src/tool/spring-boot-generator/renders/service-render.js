const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { getReqParamsWithType } = require("./../req-common");
const { STR } = require("./../../../libs/str");

const SERVICE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/service-item.java`);
const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.java`);

/**
 * Render service template
 * 
 * @param {service} config 
 * @returns {String}
 */
function renderService(config) {
        let content = STR.arrayToString1(config.items,
                x => SERVICE_ITEM_RENDER.renderTemplate(getServiceItemModel(x, config.name)));

        content = content.trimRight() + "\r\n";
        return SERVICE_RENDER.renderTemplate({ content });
}

/**
 * Get service item template
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceItemModel(config, name) {
        return {
                serviceParams: getReqParamsWithType(config),
                serviceReturnType: getServiceReturnType(config, name),
                name: config.id
        };
}

/**
 * Get service return type text
 * 
 * @param {Config} config 
 * @param {String} name
 * @returns {String} 
 */
function getServiceReturnType(config, name) {
        if (config.type != "select")
                return "boolean";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${name}>`;
}

exports.renderService = renderService;