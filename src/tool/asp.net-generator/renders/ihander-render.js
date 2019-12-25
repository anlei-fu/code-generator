const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

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