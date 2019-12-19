const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _ifRender = new SimpleRender();
_ifRender.setTempalte(`${ident}<if test="@expression">\r\n${ident}@prefix@content${ident}</if>\r\n`);

/**
 * 
 * @param {{ifExpression:String,cotent:String}} model
 * @returns {String}
 */
function renderIf(model) {
        model.prefix = model.prefix || " ";
        return model.ifExpression ? _ifRender.renderTemplate(model) : model.cotent;
}

exports.renderIf = renderIf;


