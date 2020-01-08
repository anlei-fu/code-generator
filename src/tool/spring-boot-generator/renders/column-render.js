const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");

const IF_IDENT = "            ";
const _columnsRender = new SimpleRender();
_columnsRender.setTempalte(`${IF_IDENT} @column@alias@suffix\r\n`);

/**
 * Render column template
 * 
 * @param {{ifExpression:String,alias:String,column:String,suffix:String}} model
 * @returns {String}
 */
function renderColumn(model) {
        model.alias = model.alias ? `as ${model.alias}` : "";
        let content = _columnsRender.renderTemplate(model);
        model.content = content;
        return renderIf(model);
}

exports.renderColumn = renderColumn