const { STR } = require("./../../../libs/str")
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { renderValidate } = require("./validate-render")

const ENTITY_FIELD_RENDER = new SimpleRender({}, `${__dirname}/templates/entity-item.java`);
const ENTITY_RENDER = new SimpleRender({}, `${__dirname}/templates/entity.java`);

class EntityModel {
        constructor () {
                this.fields = [];
                this.description = "";
                this.type = "";
                this.extends = "";
        }
}

/**
 * Render entity template
 * 
 * @param {EntityModel} entityModel 
 * @returns {String}
 */
function renderEntity(entityModel) {
        let content = ""

        // generate all field items
        entityModel.fields.forEach(x => {
                let validates = x.validates
                        ? STR.arrayToString1(x.validates, "", "", x => renderValidate(x))
                        : "";

                let fieldModel = {
                        name: x.name,
                        type: x.type,
                        description: x.description.replace(/\r\n/g, ""),
                        validates
                };

                let field = ENTITY_FIELD_RENDER.renderTemplate(fieldModel);
                content += STR.removeEmptyLine(field) + "\r\n";
        });

        content = content.trimRight() + "\r\n";
        let entityModel = {
                description: entityModel.description.replace(/\r\n/g, ""),
                name: entityModel.name,
                content,
                entityType: entityModel.type,
                extends: entityModel.extends ? `extends ${entityModel.extends}` : ""
        }

        return ENTITY_RENDER.renderTemplate(entityModel)
}

exports.renderEntity = renderEntity;