const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ITEM_RENDER = new SimpleRender({});
ITEM_RENDER.setTempalte("<th>@name<th>\r\n")

function renderHearders(config) {
        let content = "";
        if (config.batchOperation) {
                content += "";
        }

        config.headers.forEach(x => {
                content += ITEM_RENDER.renderTemplate({ name: x });
        });

        if (config.operation) {
                content += "<th>操作</th>";
        }

        return content;
}

exports.renderHearders = renderHeaders;