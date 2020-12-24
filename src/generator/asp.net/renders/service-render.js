const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderExportExcelService } = require("./export-excel-render");
const { FILE } = require("./../../../libs/file");

const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/service.cs`);

/**
 * Render service template
 * 
 * @param {GeneratorTemplate} config 
 * @returns {String}
 */
function renderService(config) {
        let content = "";
        if (config.batchDelete)
                content += content += FILE.read(`${__dirname}/templates/service-batchDelete.cs`);
                
        if (config.batchChangeStatus)
                content += content += FILE.read(`${__dirname}/templates/service-batchChangeStatus.cs`);

        let timeRange="";
        if(config.selectConfig.timeFilter){
           timeRange=FILE.read(`${__dirname}/templates/service-timeRange.cs`);

        }

        return SERVICE_RENDER.renderTemplate({ content,timeRange });
}

exports.renderService = renderService;