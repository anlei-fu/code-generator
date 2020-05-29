const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ITEM_SELECT_RENDER=new SimpleRender({},`${__dirname}/templates/item-select.html`);

function renderItemSelect(selectConfig){
        selectConfig.service = selectConfig.service || "SystemDictionary";
        selectConfig.dicType = selectConfig.service == "SystemDictionary" ? `"${selectConfig.name}"` : "";
      return ITEM_SELECT_RENDER.renderTemplate(selectConfig);
}

exports.renderItemSelect=renderItemSelect;



