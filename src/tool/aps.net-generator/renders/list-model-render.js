const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const LIST_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/list-model.cs`);

function renderListModel(config){
        return LIST_MODEL_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderListModel=renderListModel;