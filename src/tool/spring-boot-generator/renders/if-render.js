const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");

const IF_IDENT = "            ";
const IF_RENDER = new SimpleRender({});
IF_RENDER.setTempalte(`${IF_IDENT}<if test="@ifExpression">\r\n${IF_IDENT}      @content${IF_IDENT}</if>\r\n`);

/**
 * Render if template
 * 
 * @param {{ifExpression:String,cotent:String}} model
 * @returns {String}
 */
function renderIf(model) {
        if (!model.ifExpression)
                return model.content;

        model.content = model.content.trimLeft();
        return IF_RENDER.renderTemplate(model);
}

exports.renderIf = renderIf;


