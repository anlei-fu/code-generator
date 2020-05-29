const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const IMPORT_EXCEL_RENDER = new SimpleRender({}, `${__dirname}/templates/importExcel.html`);

function renderImpotExcel(config) {
   return IMPORT_EXCEL_RENDER.renderTemplate(config);
}

function renderService(){

}

function renderController(){

}

function renderHandler(){

}

function renderIHander(){
        
}

module.exports={
   renderImportExcel,
   renderImportExcelService,
   renderImportExcelController,
   renderImportExcelHandler,
   renderImportExcelIHander,
   renderImportExcelService
}


