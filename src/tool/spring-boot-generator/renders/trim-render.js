const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _TrimRender = new SimpleRender({}, `${__dirname}/templates/Trim.xml`);

/**
 * 
 * @param {object} config 
 * @returns {String}
 */
function renderTrim(config){
     return _TrimRender.renderTemplate(config);
}

exports.renderTrim=renderTrim