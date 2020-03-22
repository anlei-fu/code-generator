const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const JOIN_RENDER = new SimpleRender({});
JOIN_RENDER.setTempalte("          @type join @table@alias on @joinCondition")

class JoinModel {
        constructor () {
                this.type = "";

                // rawTableName
                this.table = "";
                this.alias = "";
                this.joinCondition = "";
        }
}

/**
 * Render join template
 * 
 * @param {JoinModel} model
 * @returns {String} 
 */
function renderJoin(model) {
        let config = {
                type: model.type,
                table: model.table.rawName,
                alias: model.table.alias ? ` ${model.table.alias}` : "",
                joinCondition: model.joinCondition
        }

        return JOIN_RENDER.renderTemplate(config);
}

exports.renderJoin = renderJoin;