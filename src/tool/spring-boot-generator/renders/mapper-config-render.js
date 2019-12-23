const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { renderSelect } = require("./select-render")
const { renderUpdate } = require("./update-render")
const { renderDelete } = require("./delete-render")
const { renderInsert } = require("./insert-render")
const _mapperConfigRender = new SimpleRender({}, `${__dirname}/templates/mapper.xml`);

/**
 * 
 * @param {mapperConfig} mapperConfig 
 * @returns {String}
 */
function renderMapperConfig(config) {
        let content = "";
        config.items.forEach(x => {
                content += renderMapperConfigItem(x);
        });

        return _mapperConfigRender.renderTemplate({ content });
}

/**
 * Get mapper config item, dispatch by "config.type"
 * 
 * @param {Config} config 
 * @returns {String}
 */
function renderMapperConfigItem(config) {
        switch (config.type) {
                case "insert": return renderInsert(config);
                case "update": return renderUpdate(config);
                case "delete": return renderDelete(config);
                default: return renderSelect(config);
        }
}

exports.renderMapperConfig = renderMapperConfig;