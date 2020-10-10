const { SimpleRender } = require("../../common/renders/SimplePatterRender");

const RENDER=new SimpleRender({},`${__dirname}/templates/item-text-area.html`);
function renderItemTextArea(config){
      return RENDER.renderTemplate(config);
}

exports.renderItemTextArea=renderItemTextArea;