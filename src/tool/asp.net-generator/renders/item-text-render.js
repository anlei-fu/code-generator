const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const ITEM_SELECT_RENDER=new SimpleRender({},`${__dirname}/templates/item-text.html`);

function renderItemText(textConfig){
     return ITEM_SELECT_RENDER.renderTemplate(textConfig);
}

exports.renderItemText=renderItemText;