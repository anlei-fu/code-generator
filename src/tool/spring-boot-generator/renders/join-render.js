const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const _joinRender = new SimpleRender({});
_joinRender.setTempalte("@type join @table@alias on @joinCondition")

/**
 * Render join 
 * 
 * @param {{alias:String,table:String,type:String,condition:String}} model
 * @returns {String} 
 */
function renderJoin(model) {
        model.alias=model.alias?`as ${model.alias}`:"";
        return _joinRender.renderTemplate(model);
}

exports.renderJoin = renderJoin;