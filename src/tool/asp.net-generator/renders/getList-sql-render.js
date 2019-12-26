const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { STR } = require("../../../libs/str")

const LIST_SQL_RENDER = new SimpleRender({}, `${__dirname}/templates/get-list.sql`);
const COLUMN_IDENT = "                ";
const CONDITION_IDENT = "                                      ";
const JOIN_IDENT = "           ";

/**
 * Render getList sql template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderGetListSql(config) {
        config.selectConfig.getListSql.columns=["t.*"].concat(config.selectConfig.getListSql.columns);
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

        return LIST_SQL_RENDER.renderTemplate(renderConfig);
}

exports.renderGetListSql = renderGetListSql

