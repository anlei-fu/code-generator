const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _whereRender = new SimpleRender({}, `${__dirname}/templates/where.xml`);

/**
 * 
 * @param {object} config 
 * @returns {String}
 */
function renderWhere(config){
     return _whereRender.renderTemplate(config);
}

exports.renderWhere=renderWhere