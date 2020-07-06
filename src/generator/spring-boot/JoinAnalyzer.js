const sqlUtils = require("../common/sqls/utils");
const { STR } = require("../../libs/str")
const { TYPE } = require("../../libs/utils")
const { NamingStrategy } = require("../../libs/naming-strategy");
const { EnumAnalyzer } = require("../common/enum-analyzer/EnumAnalyzer");
const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { Table } = require(`${__dirname}/builders/Table`);

const JOIN_RENDER = new SimpleRender({}, `${__dirname}/templates/config-join.js`);

const ENUM_ANALYZER = new EnumAnalyzer();

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
 * Analyze and render join configs
 */
class JoinAnalyzer {
        /**
         * Analyze join config
         * 
         * @param {TableRelations} relations
         * @param {Table} targetTable
         * @param {Tables} tables
         * @returns {[JoinAnalyzeResult]}
         */
        analyze(relations, targetTable, tables) {

                // use to unique join columns
                let joinColumns = new Set();
                let joinResults = [];

                // join with other table
                if (relations[targetTable.name]) {
                        relations[targetTable.name].forEach(relation => {
                                let joinAnalyzeResult = new JoinAnalyzeResult();
                                joinAnalyzeResult.targetTable = relation.otherTable;

                                // if other table output column is not specified 
                                // use name column as default output column
                                joinAnalyzeResult.outputColumn =
                                        relation.outputColumn || sqlUtils.findNameColumn(tables[relation.otherTable]).name;

                                if (relation.outputAlias) {
                                        joinAnalyzeResult.outputAlias = TYPE.isFunction(relation.outputAlias)
                                                ? relation.outputAlias(relation.selfColumn)
                                                : joinAnalyzeResult.outputAlias = relation.outputAlias;
                                } else {
                                        // analyze alias to avoid name the same
                                        let analyzeAliasResult = this._analyzeJoinColumnAlias(
                                                targetTable.columns,
                                                relation.otherTable,
                                                joinAnalyzeResult.outputColumn
                                        );

                                        if (joinAnalyzeResult.outputColumn != analyzeAliasResult)
                                                joinAnalyzeResult.outputAlias = analyzeAliasResult;
                                }

                                joinAnalyzeResult.joinCondition =
                                        ` t.${NamingStrategy.toHungary(relation.selfColumn)}` +
                                        ` = @alias.${NamingStrategy.toHungary(relation.otherTableColumn)}`

                                joinResults.push(joinAnalyzeResult);
                                joinColumns.add(relation.selfColumn);
                        });
                }

                // analyze join with enum dic
                Object.keys(targetTable.columns).filter(x => !joinColumns.has(x))
                        .forEach(columnName => {
                                let isEnumField = ENUM_ANALYZER.isEnumField(targetTable.columns[columnName]);
                                if (!isEnumField)
                                        return;

                                let joinConfig = new JoinAnalyzeResult();
                                joinConfig.targetTable = isEnumField.table;
                                joinConfig.outputColumn = isEnumField.label;
                                joinConfig.outputAlias = `${columnName}Label`;

                                let enumType = STR.startsWithAny(["need", "should", "can", "support", "is", "has", "allow", "permit"])
                                        ? "booleanFlag" : columnName;

                                joinConfig.joinCondition =
                                        `t.${NamingStrategy.toHungary(columnName)}` +
                                        ` = @alias.value and @alias.type = '${enumType}'`;

                                joinResults.push(joinConfig);
                        })

                return joinResults;
        }

        /**
         * Render with join template
         * 
         * @param {JoinAnalyzeResult} joinConfig 
         * @param {String} alias 
         * @returns {String}
         */
        renderJoinConfig(joinConfig, alias) {
                joinConfig.joinCondition = `"${joinConfig.joinCondition.replace(/@alias/g, alias)}"`
                joinConfig.outputAlias = joinConfig.outputAlias
                        ? `.alias("${joinConfig.outputColumn}","${joinConfig.outputAlias}")` : "";

                joinConfig.outputColumn = `"${joinConfig.outputColumn}"`;
                joinConfig.alias = `"${alias}"`;
                return STR.removeEmptyLine(JOIN_RENDER.renderTemplate(joinConfig));
        }

        /**
         * Analyze join-output-column name should with table prefix ,
         * to avoid fileds name conflict
         * 
         * @private
         * @param {String} otherTableName 
         * @param {String} columnName
         * @returns {String} 
         */
        _analyzeJoinColumnAlias(selfColumns, otherTableName, columnName) {

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

                return shouldWithPrefix
                        ? otherTableName + STR.upperFirstLetter(columnName) : columnName;
        }
}

exports.JoinAnalyzer = JoinAnalyzer