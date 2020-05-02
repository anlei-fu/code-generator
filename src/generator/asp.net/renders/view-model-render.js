const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const VIEW_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/view-model.cs`);

/**
 * Render view model template
 * 
 * @returns {String}
 */
function renderViewModel() {
        return VIEW_MODEL_RENDER.renderTemplate({});
}

exports.renderViewModel = renderViewModel;