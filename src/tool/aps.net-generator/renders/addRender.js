const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ADD_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/add.js`);
const ADD_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/add.html`);

function renderAddJs(config) {
        let renderConfig={
             name:config.name
        };
        return ADD_JS_RENDER.renderTemplate(renderConfig);
}

function renderAddHtml() {
        return ADD_HTML_RENDER.renderTemplate({});
}

module.exports = {
        renderAddJs,
        renderAddHtml
}