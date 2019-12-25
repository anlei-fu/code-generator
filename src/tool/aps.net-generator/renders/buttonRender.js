const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderAddHtml } = require("./addRender")
const BUTTONS_RENDER = new SimpleRender({}, `${__dirname}/templates/buttons.html`);


function renderButtons(config) {
        let renderConfig = {
            others:""
        };

        if (config.add)
                renderConfig.others += renderAddHtml();

        return BUTTONS_RENDER.renderTemplate(renderConfig);
}

exports.renderButtons = renderButtons