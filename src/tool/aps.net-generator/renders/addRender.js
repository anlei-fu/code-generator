const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ADD_JS_RENDER = new SimpleRender({}, "./templates/add.js");
const ADD_HTML_RENDER = new SimpleRender({}, "./templates/add.html");

function renderAddJs(config) {
        return ADD_JS_RENDER.renderTemplate(config);
}

function renderAddHtml() {
        return ADD_HTML_RENDER.renderTemplate({});
}

module.exports = {
        renderAddJs,
        renderAddHtml
}