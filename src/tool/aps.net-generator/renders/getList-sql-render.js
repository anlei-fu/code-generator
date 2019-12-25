const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { STR } = require("./../../../libs/str")
const LIST_SQL_RENDER = new SimpleRender({}, `${__dirname}/templates/get-list.sql`);
const COLUMN_IDENT = "                ";
const CONDITION_IDENT = "                                      ";
const JOIN_IDENT="           ";

function renderGetListSql(config) {
        let columns=STR.arrayToString(config.selectConfig.getListSql.columns, COLUMN_IDENT, ",\r\n").trimRight();
        let renderConfig = {
                name: config.table.rawName,
                columns: STR.removeLastComa(columns),
                conditions: STR.arrayToString(config.selectConfig.getListSql.conditions, CONDITION_IDENT, "\r\n").trimRight(),
                joins:STR.arrayToString(config.selectConfig.getListSql.joins,JOIN_IDENT,"\r\n").trimRight(),
                orderBy: config.selectConfig.getListSql.orderBy ?JOIN_IDENT+config.selectConfig.getListSql.orderBy:""
        }

        return LIST_SQL_RENDER.renderTemplate(renderConfig);
}

exports.renderGetListSql = renderGetListSql

