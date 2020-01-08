const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");

const IF_IDENT = "            ";
const PROPERTY_RENDER = new SimpleRender();
PROPERTY_RENDER.setTempalte(`${IF_IDENT} #{@property}@suffix\r\n`);

/**
 * Render property template
 * 
 * @private
 * @param {{ifExpression:String,property:String,suffix:String}} model
 */
function renderProperty(model) {
        model.property=model.name;
        let content = PROPERTY_RENDER.renderTemplate(model);
        model.content = content;
        
        return renderIf(model);
}

exports.renderProperty = renderProperty;