const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const PARAMS_ITEM_REQ_GETTER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/params-req-getter-item.java`);

function renderParamsReqGetterItem(config) {
        return PARAMS_ITEM_REQ_GETTER_ITEM_RENDER.renderTemplate(config);
}

exports.renderParamsReqGetterItem = renderParamsReqGetterItem;