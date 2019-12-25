const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderJs } = require("./js-render");
const { renderTable } = require("./table-render");
const { renderFilter } = require("./filter-render");
const { renderButtons } = require("./buttonRender");

const INDEX_RENDER = new SimpleRender({}, `${__dirname}/templates/index.html`);

/**
 * Render index.cshtml template
 * 
 * @param {GeneratorConfig} config 
 */
function renderIndex(config) {
        let indexConfig = {
                js: renderJs(config),
                table: renderTable(config),
                filters: renderFilter(config),
                buttons: renderButtons(config),
                project: config.project,
                name: config.name
        }

        return INDEX_RENDER.renderTemplate(indexConfig);
}

exports.renderIndex = renderIndex;