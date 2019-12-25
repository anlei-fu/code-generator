const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderHeaders } = require("./header-render");
const { renderBody } = require("./bodyRender");

const TABLE_RENDER = new SimpleRender({}, `${__dirname}/templates/table.html`);

/**
 * Render table template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderTable(config) {
    let tableConfig = {
        headers: renderHeaders(config),
        body: renderBody(config)
    }

    return TABLE_RENDER.renderTemplate(tableConfig);
}

exports.renderTable = renderTable;