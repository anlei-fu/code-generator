const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderExportExcelController } = require("./export-excel-render");
const { renderControllerDefaultValue } = require("./controller-defaultValue-render");
const { FILE } = require("./../../../libs/file");

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
                content += ""

        if (config.batchDelete)
                content += FILE.read(`${__dirname}/templates/controller-batchDelete.cs`);

        if (config.batchChangeStatus)
                content += FILE.read(`${__dirname}/templates/controller-batchChangeStatus.cs`);

        let controllerModel = {
                content,
                defaultValue: renderControllerDefaultValue(config).trimRight(),
                additionalParams: renderAdditionaParams(config)
        }

        return CONTROLLER_RENDER.renderTemplate(controllerModel);
}

function renderAdditionaParams(config) {
        let content = "";
        let keys = Object.keys(config.table.columns);
        keys.forEach(key => {
                if (key == "status") {
                        content += `                entity.Status = CommFun.ToInt(nvc["Status"],1);\r\n`;
                }
        });

        return content;
}



exports.renderController = renderController;