const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const SET_RENDER = new SimpleRender({}, `${__dirname}/templates/set.xml`);

/**
 * Render set template
 * 
 * @param {{content:String}} model 
 * @returns {String}
 */
function renderSet(model) {
     return SET_RENDER.renderTemplate(model);
}

exports.renderSet = renderSet