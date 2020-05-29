const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderBatchSelectHtml } = require("./batch-select-render")

const ITEM_RENDER = new SimpleRender({});
const IDENT = "                        ";
ITEM_RENDER.setTempalte(`${IDENT}<th>@name</th>\r\n`)

/**
 * Render table headers template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderHeaders(config) {
        let content = "";
        if (config.batchOperation)
                content += IDENT + "<th>" + renderBatchSelectHtml() + "</th>\r\n";

        config.tableConfig.items.forEach(x => {
                content += ITEM_RENDER.renderTemplate({ name: x.header });
        });

        if (config.operations.length > 0)
                content += `${IDENT}<th>擝作</th>\r\n`;

        return content.trimRight();
}

exports.renderHeaders = renderHeaders;