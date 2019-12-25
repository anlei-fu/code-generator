const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const OPERATION_RENDER = new SimpleRender({}, `${__dirname}/templates/operation.html`);

function renderOpertionHtml(config) {
        return OPERATION_RENDER.renderTemplate(config);
}

exports.renderOperationHtml=renderOpertionHtml;