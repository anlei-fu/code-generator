const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const {STR}=require("./../../../libs/str")

const EXPORT_EXCEL_JS_RENDER = new SimpleRender({}, `${__dirname}/templates/export-excel.js`);
const EXPORT_EXCEL_HTML_RENDER = new SimpleRender({}, `${__dirname}/templates/export-excel.html`);
const EXPORT_EXCEL_SERVICE_RENDER = new SimpleRender({}, `${__dirname}/templates/export-excel-service.cs`);
const EXPORT_EXCEL_CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/export-excel-controller.cs`);
const EXPORT_EXCEL_SQL_RENDER = new SimpleRender({}, `${__dirname}/templates/export-excel-sql.xml`);

const COLUMN_IDENT = "                ";
const CONDITION_IDENT = "                                      ";
const JOIN_IDENT = "           ";

function renderExportExcelHtml() {
  return EXPORT_EXCEL_HTML_RENDER.renderTemplate({});
}

function renderExportExcelJs() {
  return EXPORT_EXCEL_JS_RENDER.renderTemplate({});
}

function renderExportExcelService() {
  return EXPORT_EXCEL_SERVICE_RENDER.renderTemplate({});
}

function renderExportExcelController(config) {
  let headers = "";
  let contents = "";
  config.tableConfig.items.forEach(x => {
    headers += `                "${x.header}",\r\n`;
    contents += `                row["${x.header}"] =${x.content.replace("@","")};\r\n`
  });

  return EXPORT_EXCEL_CONTROLLER_RENDER.renderTemplate({
    headers,
    contents
  });

}

function renderExportExcelSql(config) {
  config.selectConfig.getListSql.columns = ["t.*"].concat(config.selectConfig.getListSql.columns);
  let columns = STR.arrayToString(config.selectConfig.getListSql.columns, COLUMN_IDENT, ",\r\n")
    , conditions = STR.arrayToString(config.selectConfig.getListSql.conditions, CONDITION_IDENT, "\r\n")
    , joins = STR.arrayToString(config.selectConfig.getListSql.joins, JOIN_IDENT, "\r\n").trimRight()
    , orderBy = config.selectConfig.getListSql.orderBy ? JOIN_IDENT + config.selectConfig.getListSql.orderBy : "";

  let renderConfig = {
    name: config.table.rawName,
    columns: STR.removeLastComa(columns.trimRight()),
    conditions: conditions.trimRight(),
    joins: joins.trimRight(),
    orderBy
  }

  return EXPORT_EXCEL_SQL_RENDER.renderTemplate(renderConfig);
}

module.exports = {
  renderExportExcelHtml,
  renderExportExcelJs,
  renderExportExcelService,
  renderExportExcelController,
  renderExportExcelSql
}