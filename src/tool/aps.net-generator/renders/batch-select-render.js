const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const BTACH_SELECT_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/batch-select.js`);
const BTACH_SELECT_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/batch-select.html`);

function renderBatchSelectJs() {
        return BTACH_SELECT_JS_RENDER.renderTemplate({});
}

function renderBatchSelectHtml() {
        return BTACH_SELECT_HTML_RENDER.renderTemplate({});
}

module.exports={
        renderBatchSelectJs,
        renderBatchSelectHtml
}