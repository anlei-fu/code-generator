
const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { OBJECT } = require("../../../libs/utils");

const ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/entity-item.cs`);
const ENTITY_RENDER = new SimpleRender({}, `${__dirname}/templates/entity.cs`);


/**
 * Render entity template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderEntity(config) {
        let content = "";
        OBJECT.forEach(config.table.columns, (key, value) => {
                let fieldConfig = {
                        description: value.description,
                        name: value.name,
                        type: getType(value.type)
                };

                content += ITEM_RENDER.renderTemplate(fieldConfig);
        });

        let entityConfig = {
                description: config.table.description,
                name: config.name,
                content: content.trimRight() + "\r\n",
                project: config.project,
                prefix: config.prefix || "M",
        }

        return ENTITY_RENDER.renderTemplate(entityConfig);
}

/**
 * Convert to nullable
 * 
 * @param {String} type
 * @returns {String} 
 */
function getType(type) {
        return type == "string" ? type : type + "?";
}

exports.renderEntity = renderEntity;

