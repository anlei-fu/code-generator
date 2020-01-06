const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");

const IF_IDENT="";
const IF_RENDER = new SimpleRender({});
IF_RENDER.setTempalte(`${IF_IDENT}<if test="@expression">\r\n${IF_IDENT}@prefix@content${IF_IDENT}</if>\r\n`);

/**
 * Render if template
 * 
 * @param {{ifExpression:String,cotent:String}} model
 * @returns {String}
 */
function renderIf(model) {
        model.prefix = model.prefix || "";
        let ret= model.ifExpression !=undefined ? IF_RENDER.renderTemplate(model) : model.cotent;
        console.log("if");
        console.log(ret);
        return ret;
}

exports.renderIf = renderIf;


