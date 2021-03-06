const { NamingStrategy } = require("../../../libs");
const { STR } = require("../../../libs/str")
const { SimpleRender } = require("../../common/renders/SimplePatternRender");
const { Entity } = require("./../builders/Entity");

const ENTITY_FIELD_RENDER = new SimpleRender({}, `${__dirname}/templates/entity-item.java`);
const ENTITY_RENDER = new SimpleRender({}, `${__dirname}/templates/entity.java`);

const VALIDATE_RENDER = new SimpleRender({});
VALIDATE_RENDER.setTempalte("    @validate\r\n");

class EntityRender {

        /**
         * Render entity template
         * 
         * @param {Entity} entityModel 
         * @returns {String}
         */
        renderEntity(entityModel) {
                let content = ""

                // generate all field items
                entityModel.fields.forEach(field => {
                        let validates = field.validates
                                ? STR.arrayToString1(field.validates, x => this._renderValidate(x))
                                : "";

                        // move to out
                        let fieldName = field.alias || field.property || field.name;

                        let fieldModel = {
                                name: fieldName,
                                type: field.isList ? `List<${field.type}>` : field.type,
                                description: field.description.replace(/\r\n/g, ""),
                                validates:validates||""
                        };


                        let fieldContent = ENTITY_FIELD_RENDER.renderTemplate(fieldModel);
                        content += STR.removeEmptyLine(fieldContent) + "\r\n";
                });

                content = content.trimRight() + "\r\n";


                let model = {
                        description: entityModel.description.replace(/\r\n/g, ""),
                        name: entityModel.name,
                        content,
                        entityType: entityModel.type,
                        extends: entityModel.extends ? `extends ${entityModel.extends}` : ""
                }

                // table name annotation
                if (entityModel.type == "entity") {
                        model.classAnnotation = `@Table(name = "${NamingStrategy.toHungary(entityModel.name).toUpperCase()}")`;
                } else {
                        model.classAnnotation = ``;
                }

                let result = ENTITY_RENDER.renderTemplate(model)
                return result;
        }

        /**
         * Render validate template
         * 
         * @private
         * @param {String} validate 
         */
        _renderValidate(validate) {
                return VALIDATE_RENDER.renderTemplate({ validate });
        }
}

exports.EntityRender = EntityRender