const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");

const IF_IDENT = "            ";
const PROPERTY_RENDER = new SimpleRender();
PROPERTY_RENDER.setTempalte(`${IF_IDENT} #{@property}@suffix\r\n`);

class PropertyModel {
        constructor () {
                this.property = "";
                this.suffix = "";
        }
}

/**
 * Render property template
 * 
 * @private
 * @param {PropertyModel} model
 */
function renderProperty(model) {
        model.property = model.name;
        model.content = PROPERTY_RENDER.renderTemplate(model);
        return renderIf(model);
}

exports.renderProperty = renderProperty;