const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderExportExcelController } = require("./export-excel-render")

const CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/controller.cs`);

/**
 * Render controller template
 * 
 * @param {GeneratorConfig} config 
 */
function renderController(config) {
        let content = "";

        if (config.exportExcel)
                content += renderExportExcelController(config);
        
        if(config.importExcel)
           content+="";

        return CONTROLLER_RENDER.renderTemplate({ content });
}

exports.renderController = renderController;