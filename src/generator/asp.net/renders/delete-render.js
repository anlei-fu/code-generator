const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const DELET_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/delete.js`);
const DELETE_HTML_RENDER= new SimpleRender({},`${__dirname}/templates/delete.html`)

/**
 * Render delete js template
 * 
 * @returns {String}
 */
function renderDeleteJs() {
        return DELET_JS_RENDER.renderTemplate({});
}

/**
 * Render delete html
 * 
 * @returns {String}
 */
function renderDeleteHtml(){
  return DELETE_HTML_RENDER.renderTemplate({});
}

exports.renderDeleteJs = renderDeleteJs;