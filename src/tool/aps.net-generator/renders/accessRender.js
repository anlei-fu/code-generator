const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const ACCESS_RENDER=new SimpleRender({},`${__dirname}/templates/access.cs`);

function renderAccess(config) {
        return ACCESS_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderAccess=renderAccess;