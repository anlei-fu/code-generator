const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const PARAMS_GETTER_SETTER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/params-item-getter-setter-item.java`);

function renderParamsGetterSetterItem(config) {
        return PARAMS_GETTER_SETTER_ITEM_RENDER.renderTemplate(config);
}

exports.renderParamsGetterSetterItem = renderParamsGetterSetterItem;