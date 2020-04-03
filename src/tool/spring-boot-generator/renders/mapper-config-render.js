const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderSelect } = require("./select-render");
const { renderUpdate } = require("./update-render");
const { renderDelete } = require("./delete-render");
const { renderInsert } = require("./insert-render");
const { NamingStrategy } = require("./../../../libs/naming-strategy")
const { STR } = require("./../../../libs/str")

const MAPPER_CONFIG_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper.xml`);

/**
 * Render mapper config template
 * 
 * @param {Config} mapperConfig 
 * @returns {String}
 */
function renderMapperConfig(config) {
        let content = STR.arrayToString1(config.items, x => renderMapperConfigItem(x) + "\r\n");
        let mapperModel = {
                content,
                tableName: NamingStrategy.toHungary(config.table.name).toLowerCase()
        }

        return MAPPER_CONFIG_RENDER.renderTemplate(mapperModel);
}

/**
 * Render mapper config item, dispatch by "config.type"
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