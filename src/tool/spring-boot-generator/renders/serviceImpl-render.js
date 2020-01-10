const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { getReqParamsWithType, getReqParamsWithoutType } = require("./../req-common")
const { STR } = require("./../../../libs/str")
const SERVICE_IMPL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_PAGE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-page.java`);
const SERVICE_IMPL_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

/**
 * Render service impl template
 * 
 * @param {Config} config 
 * @returns {String}
 */
function renderServiceImpl(config) {
        let content = "";
        config.items.forEach(x => {
                let item = getServiceImplItemConfig(x, config.name);
                content += x.type == "select" && !x.resp.single
                        ? STR.removeEmptyLine(SERVICE_IMPL_PAGE_ITEM_RENDER.renderTemplate(item)) + "\r\n"
                        : STR.removeEmptyLine(SERVICE_IMPL_ITEM_RENDER.renderTemplate(item)) + "\r\n";
        });

        content = content.trimRight() + "\r\n";
        return SERVICE_IMPL_RENDER.renderTemplate({name:config.name,  content, sname: STR.lowerFirstLetter(config.name) });
}

/**
 * Get service impl item config
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceImplItemConfig(config, name) {
        return {
                name: config.id,
                serviceImplParams: getReqParamsWithType(config),
                serviceImplReturnType: getServiceImplItemReturnType(config, name),
                serviceImplMapperParams: config.params.doCreate ? "params" : getReqParamsWithoutType(config),
                suffix: config.type == "select" ? "" : " > 0",
                content: !config.params.doCreate ? "" : renderServiceImplContent(config),
                sname: STR.lowerFirstLetter(name)
        };
}

/**
 * Render service impl content  template
 * if params ,create instance and set default values
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function renderServiceImplContent(config) {
        let content = `${config.params.type} params = new ${config.params.type}(@params);`;
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
 * Get service impl item return type text
 * 
 * @param {Config} config 
 * @param {String} name
 * @returns {String} 
 */
function getServiceImplItemReturnType(config, name) {
        if (config.type != "select")
                return "boolean";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${name}>`;
}


exports.renderServiceImpl = renderServiceImpl