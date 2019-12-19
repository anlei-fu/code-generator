const { renderIf } = require("./if-render");

/**
 * Render if assign expression
 * 
 * @private
 * @param {{ifExpression:String,suffix:String}} model
 * @returns {String} 
 */
function renderExpression(model) {
        let content = model.expression;
        model.content = content;
        return renderIf(model);
}

exports.renderExpression = renderExpression;