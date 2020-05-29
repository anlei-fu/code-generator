const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ITEM_SELECT_RENDER=new SimpleRender({},`${__dirname}/templates/item-text.html`);

function renderItemText(textConfig){
     return ITEM_SELECT_RENDER.renderTemplate(textConfig);
}

exports.renderItemText=renderItemText;