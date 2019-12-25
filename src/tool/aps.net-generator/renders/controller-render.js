const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const CONTROLLER_RENDER=new SimpleRender({},`${__dirname}/templates/controller.cs`);

function renderController(config) {
        return CONTROLLER_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderController=renderController;