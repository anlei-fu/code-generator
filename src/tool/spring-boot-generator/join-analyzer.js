const sqlUtils = require("./../sqls/utils");
const { STR } = require("./../../libs/str")
const { NamingStrategy } = require("./../../libs/naming-strategy");
const { DicAnalyzer } = require("./../dic-analyzer/analyze");
const { SimpleRender } = require("./../simple-pattern-render/simple-pattern-render");
const JOIN_RENDER = new SimpleRender({}, "./templates/config-join.js");


const analyzer = new DicAnalyzer();

class JoinAnalyzeResult {
        constructor () {
                this.targetTable = "";
                this.joinCondition = "";
                this.outputColumn = "";
                this.outputAlias = "";
        }
}

/**
 * Resolve join config
 * 
 * @param {TableRelations} relations
 * @param {Table} targetTable
 * @param {Tables} tables
 * @returns {[JoinAnalyzeResult]}
 */
function analyze(relations, targetTable, tables) {
        let results = [];
        let relationsColumns = new Set();

        // join with other table
        if (relations[targetTable.name]) {
              relations[targetTable.name].forEach(relation => {
                        let result = new JoinAnalyzeResult();
                        console.log("relation is");
                        console.log(relation);
                        result.targetTable = relation.otherTable;
                        result.outputColumn = sqlUtils.findNameColumn(tables[relation.otherTable]).name;
                        result.joinCondition = ` t.${NamingStrategy.toHungary(relation.selfColumn)} = @alias.${NamingStrategy.toHungary(relation.otherTableColumn)}`
                        results.push(result);
                        relationsColumns.add(relation.selfColumn);
                });
        }

        // join with enum dic
        Object.keys(targetTable.columns).filter(x => !relationsColumns.has(x)).forEach(columnName => {
                let dicResult = analyzer.analyze(targetTable.columns[columnName]);
                if (!dicResult)
                        return;

                let result = new JoinAnalyzeResult();
                result.targetTable =dicResult.table;
                result.outputColumn = dicResult.textField;
                result.outputAlias = `${columnName}Name`;
                result.joinCondition = `t.${NamingStrategy.toHungary(columnName)} = @alias.value and @alias.type = '${columnName}'`;
                results.push(result);
        })

        return results;
}

/**
 * Render join template
 * 
 * @param {JoinConfig} config 
 * @param {String} alias 
 * @returns {String}
 */
function renderJoinConfig(config, alias) {
        console.log(config);
        config.joinCondition=`"${config.joinCondition.replace(/@alias/g,alias)}"`
        config.outputAlias = config.outputAlias ? `.alias("${config.outputColumn}","${config.outputAlias}")` : "";
        config.outputColumn=`"${config.outputColumn}"`;
        config.alias = `"${alias}"`;
        return STR.removeEmptyLine(JOIN_RENDER.renderTemplate(config));
}

module.exports.analyze = analyze;
module.exports.renderJoinConfig = renderJoinConfig;