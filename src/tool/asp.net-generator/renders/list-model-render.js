const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

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