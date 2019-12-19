const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const WHERE_RENDER = new SimpleRender({}, `${__dirname}/templates/where.xml`);

/**
 * 
 * @param {object} model 
 * @returns {String}
 */
function renderWhere(model) {
     return WHERE_RENDER.renderTemplate(model);
}

exports.renderWhere = renderWhere