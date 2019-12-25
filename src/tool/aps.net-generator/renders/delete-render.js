const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const DELET_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/delete.js`);

function renderDeleteJs(config) {
        let renderConfig={
             name:config.name
        };
        return DELET_JS_RENDER.renderTemplate(renderConfig);
}



exports.renderDeleteJs=renderDeleteJs;