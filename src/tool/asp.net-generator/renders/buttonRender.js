const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderAddHtml } = require("./addRender");
const {renderExportExcelHtml} =require("./export-excel-render")

const BUTTONS_RENDER = new SimpleRender({}, `${__dirname}/templates/buttons.html`);

/**
 * Render buttons template
 * 
 * @param {GeneratorConfig} config 
 */
function renderButtons(config) {
        let renderConfig = {
                others: ""
        };

        if (config.add)
                renderConfig.others += renderAddHtml();
        
        if (config.exportExcel) 
                renderConfig.others += renderExportExcelHtml();

        return BUTTONS_RENDER.renderTemplate(renderConfig);
}

exports.renderButtons = renderButtons