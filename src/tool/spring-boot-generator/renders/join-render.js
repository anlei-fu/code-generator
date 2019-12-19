const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const _joinRender = new SimpleRender({}, `${__dirname}/templates/join.xml`);

/**
 * Render join 
 * 
 * @param {{alias:String,table:String,type:String,condition:String}} model
 * @returns {String} 
 */
function renderJoin(model) {
        return _joinRender.renderTemplate(model);
}

exports.renderJoin = renderJoin;