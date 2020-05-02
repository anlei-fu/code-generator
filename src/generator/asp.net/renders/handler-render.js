const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const HANDLER_RENDER = new SimpleRender({}, `${__dirname}/templates/handler.cs`);

/**
 * Render handler template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderHandler(config) {
        return HANDLER_RENDER.renderTemplate({});
}

exports.renderHandler = renderHandler;