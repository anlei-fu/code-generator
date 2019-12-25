const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/controller.cs`);

/**
 * Render controller template
 * 
 * @param {GeneratorConfig} config 
 */
function renderController(config) {
        return CONTROLLER_RENDER.renderTemplate({});
}

exports.renderController = renderController;