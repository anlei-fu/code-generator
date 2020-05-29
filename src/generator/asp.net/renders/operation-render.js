const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const OPERATION_RENDER = new SimpleRender({}, `${__dirname}/templates/operation.html`);

/**
 * Render operation template
 * 
 * @param {GeneratorConfig} config
 * @returns {String} 
 */
function renderOpertionHtml(config) {
        return OPERATION_RENDER.renderTemplate(config);
}

exports.renderOperationHtml = renderOpertionHtml;