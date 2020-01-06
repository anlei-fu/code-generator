const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");

const TRIM_RENDER = new SimpleRender({}, `${__dirname}/templates/Trim.xml`);

/**
 * Render trim template
 * 
 * @param {{suffix:String,prefix:String,content:String}} model 
 * @returns {String}
 */
function renderTrim(model) {
     model.suffix = model.suffix ? ` suffix="${model.suffix}"` : "";
     model.prefix = model.prefix ? `prefix="${model.prefix}"` : "";
     return TRIM_RENDER.renderTemplate(model);
}

exports.renderTrim = renderTrim