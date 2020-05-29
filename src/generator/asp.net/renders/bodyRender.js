const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderOperationHtml } = require("./operation-render")

const ITEM_RENDER = new SimpleRender({});
const IDENT = "                        ";
ITEM_RENDER.setTempalte(`${IDENT}<td>@value</td>\r\n`);

/**
 * Render table body template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderBody(config) {
        let row = "";
        if (config.batchOperation)
                row += `${IDENT}<td><input type="checkbox" name="Id" value="@item.Id"/></td>\r\n`;

        config.tableConfig.items.forEach(x => {
                row += ITEM_RENDER.renderTemplate({ value: x.content });
        });

        // render operation
        if (config.operations.length > 0) {
                row += `${IDENT}<td>\r\n`;
                config.operations.forEach(x => {
                        row += renderOperationHtml(x);
                })
                row += `${IDENT}</td>\r\n`;
        }

        return row.trimRight();
}

exports.renderBody = renderBody;