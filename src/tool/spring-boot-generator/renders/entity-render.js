const { STR } = require("./../../../libs/str")
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { renderValidate } = require("./validate-render")
const _entityItemRender = new SimpleRender({}, `${__dirname}/templates/entity-item.java`);
const _entityRender = new SimpleRender({}, `${__dirname}/templates/entity.java`);

/**
 * 
 * @param {Entity} entity 
 * @returns {String}
 */
function renderEntity(entity) {
        let content = ""



        // generate all field items
        entity.fields.forEach(x => {
                let validates = "";
                if (x.validates)
                        x.validates.forEach(x => {
                                validates += renderValidate(x);
                        });
                        
                let itemPatterns = {
                        name: x.name,
                        type: x.type,
                        description: x.description,
                        validates
                };


                let field = _entityItemRender.renderTemplate(itemPatterns);
                content += STR.removeEmptyLine(field) + "\r\n";
        });

        content = content.trimRight() + "\r\n";
        let patterns = {
                description: entity.description,
                name: entity.name,
                content,
                type: entity.type,
                extends: entity.extends ? `extends ${entity.extends}` : ""
        }

        return _entityRender.renderTemplate(patterns)
}

exports.renderEntity = renderEntity;