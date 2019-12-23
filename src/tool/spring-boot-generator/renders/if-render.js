const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const IF_IDENT="";
const _ifRender = new SimpleRender();
_ifRender.setTempalte(`${IF_IDENT}<if test="@expression">\r\n${IF_IDENT}@prefix@content${IF_IDENT}</if>\r\n`);

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


