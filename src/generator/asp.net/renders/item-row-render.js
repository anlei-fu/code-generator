const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const ITEM_ROW_RENDER=new SimpleRender({},`${__dirname}/templates/item-row.html`);

function renderItemRow(content){
    return ITEM_ROW_RENDER.renderTemplate({content});
}

exports.renderItemRow=renderItemRow;