const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ITEM_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/item-model.cs`);

function renderItemModel(config){
        return ITEM_MODEL_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderItemModel=renderItemModel;