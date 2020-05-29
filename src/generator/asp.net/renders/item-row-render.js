const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ITEM_ROW_RENDER=new SimpleRender({},`${__dirname}/templates/item-row.html`);

function renderItemRow(content){
    return ITEM_ROW_RENDER.renderTemplate({content});
}

exports.renderItemRow=renderItemRow;