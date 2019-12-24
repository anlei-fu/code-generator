const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderJs } = require("./js-render");
const { renderTable } = require("./table-render");
const { renderFilter } = require("./filterRender");
const { renderButtons } = require("./buttonRender");

const INDEX_RENDER = new SimpleRender({}, "./templates/index.html");

function renderIndex(config) {
        let indexConfig = {
                js: renderJs(config),
                table: renderTable(config),
                filters: renderFilter(config),
                buttons: renderButtons(config)
        }

        return INDEX_RENDER.renderTemplate(indexConfig);
}

exports.renderIndex = renderIndex;