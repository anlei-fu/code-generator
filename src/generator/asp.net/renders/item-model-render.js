const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ITEM_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/item-model.cs`);

/**
 * Render item model template
 * 
 * @returns {String}
 */
function renderItemModel() {
        return ITEM_MODEL_RENDER.renderTemplate({});
}

exports.renderItemModel = renderItemModel;