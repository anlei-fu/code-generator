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


class TableMetaInfo {
        constructor() {

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
        constructor() {
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
        }
}

class TableRelationAnalyzer {
        constructor(tables) {
                this._matchers = RELATION_MATCHERS;
                this._searcher = new SimpleFullTextSearcher();
                this._tables = tables;
                this._initSearcher();
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
                                   
                                if(column.isPk)
                                  return;

                                column.type = getJavaType(column.type);
                                if (!this._match(column.type, column.name, table.name))
                                        return;

                                this._generateRelation(relations, column,table.rawName);
                        })
                });

                return relations;
        }

        /**
         * Init searcher
         */
        _initSearcher() {
                let docs = [];
                OBJECT.forEach(this._tables,(tableName,table) => {
                        docs.push({
                                name: tableName,
                                content: table.rawName.toLowerCase(),
                                weight: 1
                        });
                })

                this._searcher.useCustomerTokenizer(x=>x.split("_"));
                this._searcher.addDocuments(docs);
        }

        /**
         * Check column has relation
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

                        console.log(match);
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
        _generateRelation(relations, selfColumn,selfTableRawName) {
                let nomarnlizedColumnName = this._normolizeColumnName(selfColumn.rawName.toLowerCase());

                let tableNameSegs=selfTableRawName.toLowerCase().split("_");
                let tablePattern="_";

                if(tableNameSegs.length>3){
                        tablePattern=tableNameSegs[0]+"_"+tableNameSegs[1]+"_"+tableNameSegs[2];

                }else if(tableNameSegs.length>2){
                   tablePattern=tableNameSegs[0]+"_"+tableNameSegs[1];
                }else{
                        tablePattern=tableNameSegs[0];
                }
                
                

                let tables = this._searcher.search(nomarnlizedColumnName+selfTableRawName.toLowerCase() , 2);
                console.log(nomarnlizedColumnName);
                console.log(tables);

                if(tables.length<2)
                 return;

                if (tables.length == 0)
                        return;

                let relation = new TableRelation();
                relation.selfColumn = selfColumn.name;
                relation.otherTable = tables[1].name;
                relation.otherTableColumn=this._getPrimaryKeyColumn(this._tables[tables[1].name]);
                relation.relationType = this._analyzeRelationType(tables[1].name);

                if (!relations[selfTableRawName])
                        relations[selfTableRawName] = [];

                relations[selfTableRawName].push(relation);
        }

        /**
         * Normalize column name
         * 
         * @param {String} columnName 
         * @returns {String}
         */
        _normolizeColumnName(columnName) {
                return STR.replace(columnName, {
                        Id: "",
                        No: ""
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

                return primaryColumn;
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
