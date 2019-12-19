const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _mapperConfigItemRender = new SimpleRender({}, `${__dirname}/templates/mapperConfig-item.java`);
const _mapperConfigRender = new SimpleRender({}, `${__dirname}/templates/mapperConfig.java`);

/**
 * 
 * @param {mapperConfig} mapperConfig 
 * @returns {String}
 */
function renderMapperConfig(mapperConfig) {
        let content = "";
        mapperConfig.items.forEach(x => {
                content += _mapperConfigItemRender.renderTemplate(x);
        });

        return _mapperConfigRender.renderTemplate({ content });
}

/**
 * Get mapper config item, dispatch by "config.type"
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperConfigItem(config) {
        switch (config.type) {
                case "insert": return this._renderInsert(config);
                case "update": return this._renderUpdate(config);
                case "delete": return this._renderDelete(config);
                default: return this._renderSelect(config);
        }
}



exports.renderMapperConfig = renderMapperConfig;