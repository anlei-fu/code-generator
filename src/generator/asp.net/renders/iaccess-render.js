const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

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