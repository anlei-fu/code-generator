/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 15:42:53
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:48:58
 */

const { OBJECT } = require("./../../libs/utils");
const { STR } = require("./../../libs/str");
const { SimpleFullTextSearcher } = require("./../full-text-index/simple-full-text-searcher");
const { getJavaType } = require("./../spring-boot-generator/utils");
const { FILE } = require("./../../libs/file");

class TableMetaInfo {
        constructor () {

                /**
                 * Is count limited
                 */
                this.isLimited = false;

                /**
                 * Is main table
                 */
                this.isMainTable = true;

                /**
                 * Raw name
                 */
                this.rawName = "";

                /**
                 * @type {{Column}}
                 */
                this.columns = {};

                /**
                 * Description
                 */
                this.description = "";

                /**
                 * Primary key column
                 */
                this.primaryKey = "";

                /**
                 * Relations with other table
                 */
                this.tableRelations = [];
        }
}

class TableRelation {
        constructor () {
                /**
                 * Other table
                 */
                this.otherTable = "";

                /**
                 * Other tbale column one-one just
                 */
                this.otherTableColumn = "";

                /**
                 *  Self column
                 */
                this.selfColumn = "";

                /**
                 *  Additional join codition
                 */
                this.additionalCondition = "";

                /**
                 * Relation type one-one one-many many-one many-many 
                 */
                this.relationType = "";
        }
}

const DEFAULT_MATCHER = (name, pattern) =>
        name.toLowerCase().includes(pattern.toLowerCase())

const RELATION_MATCHERS = {
        String: {
                Id: {
                        matcher: (column, table) => column.endsWith("Id")
                                && column != "Id"
                                && column.replace("Id", "") == table
                },
                No: {
                        matcher: (column, table) => column.endsWith("No")
                                && column != "No"
                                && !column.replace("No", "") == table
                                && !STR.includesAny(column.toLowerCase(), ["phone", "post", "card", "id", "tel"])


                }
        },
        Integer: {
                Id: {
                        matcher: (column, table) => column.endsWith("Id")
                                && column != "Id"
                                && column.replace("Id", "") == table
                },
                No: {
                        matcher: x => x.endsWith("No")
                                && !STR.includesAny(x.toLowerCase(), ["phone", "post", "card", "id", "tel"])
                                && x != "No"
                },
        },
}

const DEFAULT_KEYWORD_CANDIATE = ["up", "down", "order", "base", "fund", "bank", "company"];

const DEFAULT_MAIN_TABLE_MATCHERS = {
        Channel: {
                matcher: x => x.toLowerCase().includes("channel")
        },
        Account: {
                matcher: x => x.toLowerCase().includes("account")
        },
        Product: {
                matcher: x => x.toLowerCase().includes("product")
        },
        Province: {
                matcher: x => x.toLowerCase().includes("province")
        },
        City: {
                matcher: x => x.toLowerCase().includes("city")
        },
        Info: {
                matcher: x => x.toLowerCase().includes("info")
        },
        User: {
                matcher: x => x.toLowerCase().includes("user")
        },
        Package: {
                matcher: x => x.toLowerCase().includes("package")
        },

}

class TableRelationAnalyzer {
        constructor (tables) {
                this._matchers = RELATION_MATCHERS;
                this._searcher = new SimpleFullTextSearcher();
                this._tables = tables;
                this._initSearcher();
                this._customerSearchResultsMatcher;
                this._customerKeywordsGenerator;
                this._mainTableMatchers = DEFAULT_MAIN_TABLE_MATCHERS;
        }

        /**
         * Analyze table relations
         * 
         * @returns {{TableRelation}}
         */
        analyze() {
                let relations = {};
                OBJECT.forEach(this._tables, (tableName, table) => {
                        OBJECT.forEach(table.columns, (_, column) => {

                                if (column.isPk)
                                        return;

                                column.type = getJavaType(column.type);
                                if (!this._match(column.type, column.name, table.name))
                                        return;

                                let columnEnd=this._normolizeColumnName(column.rawName.toLowerCase());

                                if (table.rawName.toLowerCase().endsWith(columnEnd.toLowerCase()))
                                        return;

                                this._generateRelation(relations, column, table.rawName);
                        })
                });

                return relations;
        }

        useKeywordsGenerator(generator) {
                this._customerKeywordsGenerator = generator;
        }

        useSearchResultsMatcher(matcher) {
                this._customerSearchResultsMatcher = matcher;
        }

        /**
         * Init searcher
         */
        _initSearcher() {
                let docs = [];
                OBJECT.forEach(this._tables, (tableName, table) => {
                        docs.push({
                                name: tableName,
                                content: STR.replace(table.rawName.toLowerCase(),{
                                      "_main":"",
                                      "_info":"",
                                }),
                                weight: 1
                        });
                })

                this._searcher.useCustomerTokenizer(x => x.toLowerCase().split("_"));
                this._searcher.addDocuments(docs);
        }

        /**
         * Check doese column has relation
         * 
         * @private
         * @param {String} type 
         * @param {String} columnName 
         * @param {String} tableName
         * @returns {boolean} 
         */
        _match(type, columnName) {
                if (!this._matchers[type])
                        return false;

                for (const key in this._matchers[type]) {
                        let match = this._matchers[type].matcher
                                ? this._matchers[type].matcher(columnName)
                                : DEFAULT_MATCHER(columnName, key);

                        if (match)
                                return true;
                }

                return false;
        }

        /**
         * Generate relation core func
         * 
         * @param {String} selfTableRawName 
         * @param {Realations} relations 
         * @param {String} selfColumn 
         */
        _generateRelation(relations, selfColumn, selfTableRawName) {

                let keywords = this._customerKeywordsGenerator
                        ? this._customerKeywordsGenerator(selfColumn.rawName, selfTableRawName)
                        : this._defaultSearchKeyWordsGenerator(selfColumn.rawName, selfTableRawName);


                let candidates = this._searcher.search(keywords, 10);
                if (candidates.length == 0)
                        return;

                let table = this._customerSearchResultsMatcher
                        ? this._customerSearchResultsMatcher(selfColumn.rawName, selfTableRawName, candidates)
                        : this._defaultSearchResultsMatcher(selfColumn.rawName, selfTableRawName, candidates);

                if (!table)
                        return;

                let relation = new TableRelation();
                relation.selfColumn = selfColumn.name;
                relation.otherTable = table.name;
                relation.otherTableColumn = this._getPrimaryKeyColumn(this._tables[table.name]);
                relation.relationType = this._analyzeRelationType(table.name);

                if (!relations[selfTableRawName])
                        relations[selfTableRawName] = [];

                relations[selfTableRawName].push(relation);
        }

        _defaultSearchKeyWordsGenerator(columnRawName, tableRawName) {
                let keywords = this._normolizeColumnName(columnRawName);
                let tableSegs = tableRawName.toLowerCase().split("_");
                let set = new Set(tableSegs);

                DEFAULT_KEYWORD_CANDIATE.forEach(x => {
                        if (set.has(x)) {
                                keywords += `_${x}`;
                        }
                })

                return `${tableSegs[0]}_${keywords}`;
        }

        _defaultSearchResultsMatcher(columnRawName, tableRawName, results) {
                let columnSegs = this._normolizeColumnName(columnRawName.toLowerCase()).split("_");
                if (columnSegs[columnSegs.length - 1] == "")
                        columnSegs.pop();
                let best;
                for (var x of results) {
                        if (x.content.toLowerCase() == tableRawName.toLowerCase())
                                continue;

                        if (!best)
                                best = x;

                        let tableSegs = x.content.toLowerCase().split("_");
                         if (STR.includesAny(tableSegs[tableSegs.length-1],["main","info"])) 
                                 tableSegs.pop();


                        if (columnSegs[columnSegs.length - 1] == tableSegs[tableSegs.length - 1])
                                return x;
                };

                if (best && !best.name.toLowerCase().includes(columnSegs[columnSegs.length - 1]))
                        return null;

                return best;
        }

        /**
         * Normalize column name
         * 
         * @param {String} columnName 
         * @returns {String}
         */
        _normolizeColumnName(columnName) {
                columnName=columnName.toLowerCase();
                return STR.replace(columnName, {
                        "_no": "",
                        "_id": "",
                        id: "",
                        no: "",
                       
                });
        }

        /**
         * Get primary key column of table
         * 
         * @param {Table} table 
         * @returns {String}
         */
        _getPrimaryKeyColumn(table) {
                let primaryColumn;
                for (const columnName in table.columns) {
                        primaryColumn = primaryColumn || columnName;
                        if (table.columns[columnName].isPk)
                                return columnName;
                }
                return  primaryColumn;
        }

        /**
         * Analyze relation type
         * 
         * @param {String} other 
         * @returns {String}
         */
        _analyzeRelationType(other) {
                for (const key in this._mainTableMatchers) {
                        let match = this._mainTableMatchers[key].matcher
                                ? this._mainTableMatchers[key].matcher(other)
                                : DEFAULT_MATCHER(other, key);

                        if (match)
                                return "manyToOne";
                }

                return "oneToMany";
        }
}

module.exports = {
        TableRelation,
        TableRelationAnalyzer
}
