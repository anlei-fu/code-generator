const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");

const VALIDATE_RENDER = new SimpleRender({});
VALIDATE_RENDER.setTempalte("    @validate\r\n");

/**
 * Render validate template
 * 
 * @param {String} validate 
 */
function renderValidate(validate) {
        return VALIDATE_RENDER.renderTemplate({ validate });
}

exports.renderValidate = renderValidate;