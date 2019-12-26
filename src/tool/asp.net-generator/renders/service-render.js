const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderExportExcelService} = require("./export-excel-render");

const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.cs`);

/**
 * Render service template
 * 
 * @param {GeneratorTemplate} config 
 * @returns {String}
 */
function renderService(config) {
        let content="";
        if (config.exportExcel) 
                content+=renderExportExcelService(config.selectConfig);

        return SERVICE_RENDER.renderTemplate({content});
}

exports.renderService = renderService;