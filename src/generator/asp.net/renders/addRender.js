const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const ADD_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/add.js`);
const ADD_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/add.html`);

/**
 * Render add js template
 * 
 * @returns {String}
 */
function renderAddJs() {
        return ADD_JS_RENDER.renderTemplate();
}

/**
 * Render add html template
 */
function renderAddHtml() {
        return ADD_HTML_RENDER.renderTemplate({});
}

module.exports = {
        renderAddJs,
        renderAddHtml
}