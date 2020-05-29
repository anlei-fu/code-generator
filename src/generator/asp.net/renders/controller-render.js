const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderExportExcelController } = require("./export-excel-render");
const {renderControllerDefaultValue}=require("./controller-defaultValue-render");

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

        if (config.importExcel)
                content += "";

        let controllerModel = {
                content,
                defaultValue:renderControllerDefaultValue(config).trimRight()
        }

        return CONTROLLER_RENDER.renderTemplate(controllerModel);
}



exports.renderController = renderController;