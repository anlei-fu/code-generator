const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const ITEM_SELECT_RENDER=new SimpleRender({},`${__dirname}/templates/item-select.html`);

function renderItemSelect(selectConfig){
        selectConfig.service = selectConfig.service || "SystemDictionary";
        selectConfig.dicType = selectConfig.service == "SystemDictionary" ? `"${selectConfig.name}"` : "";
      return ITEM_SELECT_RENDER.renderTemplate(selectConfig);
}

exports.renderItemSelect=renderItemSelect;



