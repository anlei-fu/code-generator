const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { STR } = require("../../../libs/str")

const COUNT_SQL_RENDER = new SimpleRender({}, `${__dirname}/templates/get-count.sql`);
const CONDITION_IDENT = "                 ";

/**
 * Render getCount sql template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderGetCountSql(config) {
        let conditions = STR.arrayToString(config.selectConfig.getCountSql.conditions, CONDITION_IDENT, "\r\n")
        let renderConfig = {
                name: config.table.rawName,
                conditions: conditions.trimRight(),
        }

        return COUNT_SQL_RENDER.renderTemplate(renderConfig);
}

exports.renderGetCountSql = renderGetCountSql

