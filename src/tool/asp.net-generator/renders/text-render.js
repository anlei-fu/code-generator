const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const TEXT_RENDER = new SimpleRender({}, `${__dirname}/templates/text.html`);

/**
 * Render text filter template
 * 
 * @param {TextConfig} config 
 */
function renderText(config) {
  return TEXT_RENDER.renderTemplate(config);
}

exports.renderText = renderText;