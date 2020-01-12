const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const JOIN_RENDER = new SimpleRender({});
JOIN_RENDER.setTempalte("@type JOIN @table@alias ON @joinCondition")

/**
 * Render join template
 * 
 * @param {{alias:String,table:String,type:String,condition:String}} model
 * @returns {String} 
 */
function renderJoin(model) {
        model.alias = model.alias ? `as ${model.alias}` : "";
        
        return JOIN_RENDER.renderTemplate(model);
}

exports.renderJoin = renderJoin;