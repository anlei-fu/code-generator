const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const DELET_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/delete.js`);

/**
 * Render delete js template
 * 
 * @returns {String}
 */
function renderDeleteJs(config) {
        return DELET_JS_RENDER.renderTemplate({});
}

exports.renderDeleteJs = renderDeleteJs;