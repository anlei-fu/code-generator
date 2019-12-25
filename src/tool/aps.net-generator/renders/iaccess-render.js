const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const IACCESS_RENDER=new SimpleRender({},`${__dirname}/templates/iaccess.cs`);

function renderIAccess(config) {
        return IACCESS_RENDER.renderTemplate({
                project: config.project,
                prefix: config.prefix,
                name: config.name
        });
}

exports.renderIAccess=renderIAccess;