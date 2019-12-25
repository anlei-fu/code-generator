const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.cs`);

/**
 * Render service template
 * 
 * @param {GeneratorTemplate} config 
 * @returns {String}
 */
function renderService(config) {
        return SERVICE_RENDER.renderTemplate({});
}

exports.renderService = renderService;