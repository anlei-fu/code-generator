const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

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