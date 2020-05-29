const { SimpleRender } = require("./../../common/renders/SimplePatterRender");

const BTACH_SELECT_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/batch-select.js`);
const BTACH_SELECT_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/batch-select.html`);

/**
 * Render batch select js template
 */
function renderBatchSelectJs() {
        return BTACH_SELECT_JS_RENDER.renderTemplate({});
}

/**
 * Render batch seletc html template
 */
function renderBatchSelectHtml() {
        return BTACH_SELECT_HTML_RENDER.renderTemplate({});
}

module.exports = {
        renderBatchSelectJs,
        renderBatchSelectHtml
}