const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const JOIN_RENDER = new SimpleRender({});
JOIN_RENDER.setTempalte("          @type JOIN @table@alias ON @joinCondition")

/**
 * Render join template
 * 
 * @param {{alias:String,table:String,type:String,condition:String}} model
 * @returns {String} 
 */
function renderJoin(model) {
        let config={
                type:model.type,
                table:model.table.rawName,
                alias:model.table.alias ? ` ${model.table.alias}` : "",
                joinCondition:model.joinCondition
        }

        return JOIN_RENDER.renderTemplate(config);
}

exports.renderJoin = renderJoin;