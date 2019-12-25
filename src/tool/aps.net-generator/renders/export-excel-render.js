const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const EXPORT_EXCEL_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/exportExcel.js`);
const EXPORT_EXCEL_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/exportExcel.html`);


function renderExportExcelHtml(config){
   return EXPORT_EXCEL_HTML_RENDER.renderTemplate(config);
}

function renderExportExcelJs(config){
  return EXPORT_EXCEL_JS_RENDER.renderTemplate(config);
}

function renderService(config){

}

function renderController(config){

}

function renderHandler(config){

}

function renderIHander(config){
        
}

module.exports={
        renderExportExcelHtml,
        renderExportExcelJs
}