const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { STR } = require("./../../../libs/str")
const COUNT_SQL_RENDER = new SimpleRender({}, `${__dirname}/templates/get-count.sql`);
const CONDITION_IDENT = "                 ";

function renderGetCountSql(config) {
        let renderConfig = {
                name: config.table.rawName,
                conditions: STR.arrayToString(config.selectConfig.getCountSql.conditions, CONDITION_IDENT, "\r\n").trimRight(),
        }

        return COUNT_SQL_RENDER.renderTemplate(renderConfig);
}

exports.renderGetCountSql = renderGetCountSql

