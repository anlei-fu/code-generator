const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const HANDLER_RENDER=new SimpleRender({},`${__dirname}/templates/handler.cs`);

function renderHandler(config) {
        return HANDLER_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderHandler=renderHandler;