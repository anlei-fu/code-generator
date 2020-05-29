const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ACCESS_RENDER = new SimpleRender({}, `${__dirname}/templates/access.cs`);

/**
 * Render DbAccess template
 * 
 * @param {GenaratorConfig} config 
 */
function renderAccess() {
        return ACCESS_RENDER.renderTemplate({});
}

exports.renderAccess = renderAccess;