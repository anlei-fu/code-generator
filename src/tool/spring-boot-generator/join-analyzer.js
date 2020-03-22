const sqlUtils = require("./../sqls/utils");
const { STR } = require("./../../libs/str")
const { NamingStrategy } = require("./../../libs/naming-strategy");
const { DicAnalyzer } = require("./../dic-analyzer/analyze");
const { SimpleRender } = require("./../simple-pattern-render/simple-pattern-render");
const JOIN_RENDER = new SimpleRender({}, "./templates/config-join.js");

const ENUM_ANALYZER = new DicAnalyzer();

class JoinAnalyzeResult {
        constructor () {
                /**
                 * @type {String}
                 */
                this.targetTable = "";

                /**
                 * @type {String}
                 */
                this.joinCondition = "";

                /**
                 * @type {String}
                 */
                this.outputColumn = "";

                /**
                 * @type {String}
                 */
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

        // use to unique join columns
        let relationsColumns = new Set();
        let results = [];

        // join with other table
        if (relations[targetTable.name]) {
                relations[targetTable.name].forEach(relation => {
                        let result = new JoinAnalyzeResult();
                        result.targetTable = relation.otherTable;
                        result.outputColumn = sqlUtils.findNameColumn(tables[relation.otherTable]).name;

                        // analyze alias to avoid name the same
                        let analyzeAliasResult = analyzeJoinColumnAlias(targetTable.columns, relation.otherTable, result.outputColumn);
                        if (result.outputColumn != analyzeAliasResult)
                                result.outputAlias = analyzeAliasResult;

                        result.joinCondition = ` t.${NamingStrategy.toHungary(relation.selfColumn)} = @alias.${NamingStrategy.toHungary(relation.otherTableColumn)}`
                        results.push(result);
                        relationsColumns.add(relation.selfColumn);
                });
        }

        // join with enum dic
        Object.keys(targetTable.columns).filter(x => !relationsColumns.has(x))
                .forEach(columnName => {
                        let dicResult = ENUM_ANALYZER.analyze(targetTable.columns[columnName]);
                        if (!dicResult)
                                return;

                        let result = new JoinAnalyzeResult();
                        result.targetTable = dicResult.table;
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
        config.joinCondition = `"${config.joinCondition.replace(/@alias/g, alias)}"`
        config.outputAlias = config.outputAlias ? `.alias("${config.outputColumn}","${config.outputAlias}")` : "";
        config.outputColumn = `"${config.outputColumn}"`;
        config.alias = `"${alias}"`;
        return STR.removeEmptyLine(JOIN_RENDER.renderTemplate(config));
}

/**
 * Analyze join output-column should with table prefix , avoid  name conflict
 * 
 * @param {String} otherTableName 
 * @param {String} columnName
 * @returns {String} 
 */
function analyzeJoinColumnAlias(selfColumns, otherTableName, columnName) {

        // normolize table name
        otherTableName = STR.replace(otherTableName, { "Info": "" });
        let set = new Set(NamingStrategy.toHungary(otherTableName).split("_"));

        let shouldWithPrefix = true;
        if (selfColumns[columnName]) {
                shouldWithPrefix = true;
        } else {
                for (const seg of NamingStrategy.toHungary(columnName).split("_")) {
                        if (set.has(seg)) {
                                shouldWithPrefix = false;
                                break;
                        }
                }
        }

        return shouldWithPrefix ? otherTableName + STR.upperFirstLetter(columnName) : columnName;
}

module.exports.analyze = analyze;
module.exports.renderJoinConfig = renderJoinConfig;