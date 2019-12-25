const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const VIEW_MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/view-model.cs`);

function renderViewModel(config){
        return VIEW_MODEL_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderViewModel=renderViewModel;