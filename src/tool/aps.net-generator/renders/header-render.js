const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const {renderBatchSelectHtml}=require("./batch-select-render")
const ITEM_RENDER = new SimpleRender({});
const IDENT="                        ";
ITEM_RENDER.setTempalte(`${IDENT}<th>@name<th>\r\n`)

function renderHeaders(config) {
        let content = "";
        if (config.batchOperation) {
                content +=IDENT+"<th>"+renderBatchSelectHtml()+"</th>\r\n";
        }

        config.tableConfig.items.forEach(x => {
                content += ITEM_RENDER.renderTemplate({ name: x.hearder });
        });

        if (config.operations.length>0) {
        content += `${IDENT}<th>??</th>\r\n`;
        }

        return content;
}

exports.renderHeaders = renderHeaders;