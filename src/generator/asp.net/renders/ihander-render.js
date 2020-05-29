const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const IHandler_RENDER = new SimpleRender({}, `${__dirname}/templates/ihandler.cs`);

/**
 * Render IHandler template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderIHandler(config) {
        return IHandler_RENDER.renderTemplate({});
}

exports.renderIHandler = renderIHandler;