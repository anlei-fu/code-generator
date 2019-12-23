const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { getReqParamsWithType, getReqParamsWithoutType } = require("./../req-common")
const { STR } = require("./../../../libs/str")
const SERVICE_IMPL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

/**
 * 
 * @param {object} config 
 * @returns {String}
 */
function renderServiceImpl(config) {
        let content = "";
        config.items.forEach(x => {
                let item = getServiceImplItem(x, config.name);
                content += STR.removeEmptyLine(SERVICE_IMPL_ITEM_RENDER.renderTemplate(item)) + "\r\n";
        });

        content = content.trimRight() + "\r\n";
        return SERVICE_IMPL_RENDER.renderTemplate({ content, sname: STR.lowerFirstLetter(config.name) });
}

/**
 * Get service impl item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceImplItem(config, name) {
        return {
                name: config.id,
                serviceImplParams: getReqParamsWithType(config),
                serviceImplReturnType: getServiceReturnType(config, name),
                serviceImplMapperParams: config.params.doCreate ? "params" : getReqParamsWithoutType(config),
                suffix: config.type == "select" ? "" : " > 0",
                content: !config.params.doCreate ? "" : getServiceImplContent(config),
                sname: STR.lowerFirstLetter(name)
        };
}


/**
 * Get service impl content 
 * if params ,create instance and set default values
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getServiceImplContent(config) {
        let content = `${config.params.name} params = new ${config.params.name}(@params)`;
        content = content.replace("@params", getReqParamsWithoutType(config));

        // if has default values, generate set expression
        if (config.params.defaultValues) {
                config.params.defaultValues.forEach((value, key) => {
                        content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                });
        }

        return content;
}
/**
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


exports.renderServiceImpl = renderServiceImpl