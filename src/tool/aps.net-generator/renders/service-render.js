const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ISERVICE_RENDER=new SimpleRender({},`${__dirname}/templates/service.cs`);

function renderService(config) {
        return ISERVICE_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderService=renderService;