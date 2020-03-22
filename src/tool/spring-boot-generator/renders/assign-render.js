const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");
const { STR } = require("./../../../libs/str")

const IF_IDENT = "            ";
const _asignRender = new SimpleRender();
_asignRender.setTempalte(`${IF_IDENT}@prefix@column = #{@property}@suffix\r\n`);

class AsignModel {
        constructor () {
                this.suffix = "";
                this.property = "";
        }
}

/**
 * Render assign template
 * 
 * @private
 * @param {AsignModel} model
 * @returns {String} 
 */
function renderAsign(model) {
        model.suffix = model.suffix || "";
        model.property = STR.lowerFirstLetter(model.name);
        let content = _asignRender.renderTemplate(model);
        model.content = content;
        return renderIf(model);
}

exports.renderAsign = renderAsign;