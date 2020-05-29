const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const LIST_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/list-model.cs`);

/**
 * Render list model template
 * 
 * @returns {String}
 */
function renderListModel() {
        return LIST_MODEL_RENDER.renderTemplate({});
}

exports.renderListModel = renderListModel;