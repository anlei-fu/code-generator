const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _whereRender = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

/**
 * 
 * @param {object} config 
 * @returns {String}
 */
function renderServiceImpl(config) {
        return _whereRender.renderTemplate(config);
}

/**
 * Get service impl item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceImplItem(config) {
        return {
                name: config.id,
                serviceImplParams: this._getReqParamsWithType(config),
                serviceImplReturnType: this.getServiceReturnType(config),
                serviceImplMapperParams: config.param ? "params" : this._getReqParamsWithoutType(config),
                suffix: config.type == "select" ? "" : " > 0",
                content: !config.params.doCreate ? "" : this._getServiceImplContent(config),
                sname: STR.lowerFirstLetter(this.config.name)
        };
}

/**
 * Get serviceImpl's mapper params
 * default name is "params" if generate Params entity
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function _getServiceImplMapperParams(config) {
        return config.params.doCreate ? "params" : this._getReqParamsWithoutType(config);
}

/**
 * Get service impl content 
 * if params ,create instance and set default values
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function _getServiceImplContent(config) {
        let content = `${config.params.name} params = new ${config.params.name}(@params)`;
        content = content.replace("@params", this._getReqParamsWithoutType(config));

        // if has default values, generate set expression
        if (config.params.defaultValues) {
                config.params.defaultValues.forEach((value, key) => {
                        content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                });
        }

        return content;
}

exports.renderServiceImpl = renderServiceImpl