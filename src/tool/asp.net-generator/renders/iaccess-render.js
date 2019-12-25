const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const IACCESS_RENDER = new SimpleRender({}, `${__dirname}/templates/iaccess.cs`);

/**
 * Render IAccess template
 * 
 * @returns {String}
 */
function renderIAccess() {
        return IACCESS_RENDER.renderTemplate({});
}

exports.renderIAccess = renderIAccess;