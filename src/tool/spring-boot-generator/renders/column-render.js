const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderIf } = require("./if-render");
const { NamingStrategy } = require("./../../../libs/naming-strategy");

const IF_IDENT = "            ";
const COLUMN_RENDER = new SimpleRender();
COLUMN_RENDER.setTempalte(`${IF_IDENT} @column@alias@suffix\r\n`);

class ColumnModel {
        constructor () {
                this.alias = "";
        }
}

/**
 * Render column template
 * 
 * @param {ColumnModel} model
 * @returns {String}
 */
function renderColumn(model) {
        model.alias = model.alias ? ` as ${NamingStrategy.toHungary(model.alias).toLowerCase()}` : "";
        let content = COLUMN_RENDER.renderTemplate(model);
        model.content = content;
        return renderIf(model);
}

exports.renderColumn = renderColumn