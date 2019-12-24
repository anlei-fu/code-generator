const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ITEM_RENDER = new SimpleRender({});
ITEM_RENDER.setTempalte("<td>@item.@value<td>\r\n")
function renderBody(config) {
        let row = "";

        if (config.batchOperation) {
                row += ``;
        }

        config.fields.forEach(x => {
                let value = x.alias ? `GetDataValue("${x.alias}")` : x.name;
                row += ITEM_RENDER.renderTemplate({ value });
        });

        if (config.operation) {
                let field = "<td>";

                if (config.operation.edit) {

                }

                if (config.operation.delete) {

                }

                field += "</td>";
                row += field;
        }

        return row;

}

exports.renderBody = renderBody;