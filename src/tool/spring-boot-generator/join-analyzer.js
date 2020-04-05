const sqlUtils = require("./../sqls/utils");
const { STR } = require("./../../libs/str")
const { NamingStrategy } = require("./../../libs/naming-strategy");
const {  EnumAnalyzer } = require("../enum-analyzer/analyze");
const { SimpleRender } = require("./../simple-pattern-render/simple-pattern-render");
const JOIN_RENDER = new SimpleRender({}, "./templates/config-join.js");

const ENUM_ANALYZER = new EnumAnalyzer();

class JoinConfig {
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
 * Analyze join config
 * 
 * @param {TableRelations} relations
 * @param {Table} targetTable
 * @param {Tables} tables
 * @returns {[JoinConfig]}
 */
function analyze(relations, targetTable, tables) {

        // use to unique join columns
        let joinColumns = new Set();
        let configs = [];

        // join with other table
        if (relations[targetTable.name]) {
                relations[targetTable.name].forEach(relation => {
                        let joinConfig = new JoinConfig();
                        joinConfig.targetTable = relation.otherTable;
                        joinConfig.outputColumn = sqlUtils.findNameColumn(tables[relation.otherTable]).name;

                        // analyze alias to avoid name the same
                        let analyzeAliasResult = analyzeJoinColumnAlias(targetTable.columns, relation.otherTable, joinConfig.outputColumn);
                        if (joinConfig.outputColumn != analyzeAliasResult)
                                joinConfig.outputAlias = analyzeAliasResult;

                        joinConfig.joinCondition = ` t.${NamingStrategy.toHungary(relation.selfColumn)} = @alias.${NamingStrategy.toHungary(relation.otherTableColumn)}`
                        configs.push(joinConfig);
                        joinColumns.add(relation.selfColumn);
                });
        }

        // analyze join with enum dic
        Object.keys(targetTable.columns).filter(x => !joinColumns.has(x))
                .forEach(columnName => {
                        let enumResult = ENUM_ANALYZER.isEnumField(targetTable.columns[columnName]);
                        if (!enumResult)
                                return;

                        let joinConfig = new JoinConfig();
                        joinConfig.targetTable = enumResult.table;
                        joinConfig.outputColumn = enumResult.textField;
                        joinConfig.outputAlias = `${columnName}Name`;
                        joinConfig.joinCondition = `t.${NamingStrategy.toHungary(columnName)} = @alias.value and @alias.type = '${columnName}'`;
                        configs.push(joinConfig);
                })

        return configs;
}

/**
 * Render with join template
 * 
 * @param {JoinConfig} joinConfig 
 * @param {String} alias 
 * @returns {String}
 */
function renderJoinConfig(joinConfig, alias) {
        joinConfig.joinCondition = `"${joinConfig.joinCondition.replace(/@alias/g, alias)}"`
        joinConfig.outputAlias = joinConfig.outputAlias ? `.alias("${joinConfig.outputColumn}","${joinConfig.outputAlias}")` : "";
        joinConfig.outputColumn = `"${joinConfig.outputColumn}"`;
        joinConfig.alias = `"${alias}"`;
        return STR.removeEmptyLine(JOIN_RENDER.renderTemplate(joinConfig));
}

/**
 * Analyze join-output-column name should with table prefix ,
 * to avoid fileds name conflict
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