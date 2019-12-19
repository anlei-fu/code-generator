const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");

const _columnsRender = new SimpleRender();
_columnsRender.setTempalte(`${ident}  @column@alias@suffix\r\n`);

/**
 * Render if column expression
 * 
 * @private
 * @param {{ifExpression:String,alias:String,column:String,suffix:String}} model
 * @returns {String}
 */
function renderColumn(model) {
        model.alias = "as " + model.alias + " " || " ";
        let content = _columnsRender.renderTemplate(model);
        model.content = content;
        return model.ifExpression ? renderIf(model) : content;
}

exports.renderColumn = renderColumn;