const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _SetRender = new SimpleRender({}, `${__dirname}/templates/Set.xml`);

/**
 * 
 * @param {object} config 
 * @returns {String}
 */
function renderSet(config){
     return _SetRender.renderTemplate(config);
}

exports.renderSet=renderSet