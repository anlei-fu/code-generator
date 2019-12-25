const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const IHandler_RENDER=new SimpleRender({},`${__dirname}/templates/ihandler.cs`);

function renderIHandler(config) {
        return IHandler_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderIHandler=renderIHandler;