const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { SimpleFullTextSearcher } = require("../full-text-index/simple-full-text-searcher");
const { getJavaType } = require("../spring-boot-generator/utils");
const { LoggerFactory } = require("../logging/logger-factory")

const LOG = LoggerFactory.getLogger("Table relation resolver");

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

const RELATION_CANDIDATES_MATCHERS = {
        String: {
                Id: {
                        matcher: (columnName) => columnName.endsWith("Id")
                                && columnName != "Id"
                },
                No: {
                        matcher: (columnName) => columnName.endsWith("No")
                                && columnName != "No"
                                && !STR.includesAny(columnName.toLowerCase(), ["phone", "post", "card", "id", "tel"])
                }
        },
        Integer: {
                Id: {
                        matcher: (columnName) => columnName.endsWith("Id")
                                && columnName != "Id"
                },
                No: {
                        matcher: columnName => columnName.endsWith("No")
                                && !STR.includesAny(columnName.toLowerCase(), ["phone", "post", "card", "id", "tel"])
                                && columnName != "No"
                },
        },
}

const DEFAULT_KEYWORD_CANDIATE = ["up", "down", "order", "base", "fund", "bank", "company", "diff", "package"];

const DEFAULT_MAIN_TABLE_MATCHERS = {
        Default: {
                matcher: columnName => STR.endsWithAny(columnName.toLowerCase(), [
                        "channel",
                        "product",
                        "province",
                        "city",
                        "config",
                        "flow",
                        "package",
                        "account",
                        "info",
                        "bank",
                        "company",
                ])
        },
}

class TableRelationAnalyzer {
        constructor (tables) {
                this._candiadtesMatchers = RELATION_CANDIDATES_MATCHERS;
                this._searcher = new SimpleFullTextSearcher();
                this._tables = tables;
                this._customerOtherTableColumnSelector;
                this._uselessSuffix = new Set(["info", "main"]);
                this._customerSearchResultsMatcher;
                this._customerKeywordsGenerator;
                this._mainTableMatchers = DEFAULT_MAIN_TABLE_MATCHERS;
                this._initSearcher();
        }

        /**
         * Analyze table relations
         * 
         * @returns {{TableRelation}}
         */
        analyze() {
                let relations = {};
                OBJECT.forEach(this._tables, (__, table) => {
                        OBJECT.forEach(table.columns, (_, column) => {

                                //  there's no need to anlyze pk column
                                if (column.isPk)
                                        return;

                                column.type = getJavaType(column.type);
                                if (!this._shouldBeCandidate(column.type, column.name, table.name))
                                        return;

                                // pk check       
                                let normalizeizedColumnName = this._normolizeColumnName(column.rawName.toLowerCase());
                                if (table.rawName.toLowerCase().endsWith(normalizeizedColumnName.toLowerCase()))
                                        return;

                                this._generateRelation(relations, column, table.rawName, table.name);
                        })
                });

                LOG.info("finish resolve");

                return relations;
        }

        /**
         * Match possible relation column
         * 
         * @param {{Type:{Item:{matcher}}}} matchers 
         */
        useRelationColumnMatcher(matchers) {
                OBJECT.deepExtend(this._candiadtesMatchers, matchers);
        }

        /**
         * Generate search keywords
         * 
         * @param {(String,String)=>String} generator  
         * (column-raw-name,table-raw-name) =>search keywords
         */
        useKeywordsGenerator(generator) {
                this._customerKeywordsGenerator = generator;
        }

        /**
         * Find best result
         * 
         * @param {(String,String,[Any]) =>Any} matcher 
         * (column raw name,table raw name, searcher results)=> best result
         */
        useSearchResultsMatcher(matcher) {
                this._customerSearchResultsMatcher = matcher;
        }

        /**
         * Use to trim useless suffix
         * 
         * @param {[String]} suffixes
         */
        useSuffixTrimmer(suffixes) {
                suffixes.forEach(x => {
                        this._uselessSuffix.add(x);
                });
        }

        /**
         * Find relation column from other table
         * 
         * @param {(String,Table)=>Column} getter 
         */
        useOtherTableColumnGetter(getter) {
                this._customerOtherTableColumnSelector = getter;
        }

        /**
         * Init searcher
         */
        _initSearcher() {
                let docs = [];
                OBJECT.forEach(this._tables, (tableName, table) => {
                        docs.push({
                                name: tableName,
                                content: STR.replace(table.rawName.toLowerCase(), {
                                        "_main": "",
                                        "_info": "",
                                }),
                                weight: 1
                        });
                })

                // tokenizer ,split by '_'
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
        _shouldBeCandidate(type, columnName) {
                if (!this._candiadtesMatchers[type])
                        return false;

                for (const key in this._candiadtesMatchers[type]) {
                        let match = this._candiadtesMatchers[type][key].matcher
                                ? this._candiadtesMatchers[type][key].matcher(columnName)
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
        _generateRelation(relations, selfColumn, selfTableRawName, table) {

                // generate search keywords
                let keywords = this._customerKeywordsGenerator
                        ? this._customerKeywordsGenerator(selfColumn.rawName, selfTableRawName)
                        : this._defaultSearchKeyWordsGenerator(selfColumn.rawName, selfTableRawName);

                // nocandiate found
                let candidates = this._searcher.search(keywords, 10);
                if (candidates.length == 0)
                        return;

                // get best candidate 
                let bestCandidate = this._customerSearchResultsMatcher
                        ? this._customerSearchResultsMatcher(selfColumn.rawName, selfTableRawName, candidates)
                        : this._defaultBestResultsMatcher(selfColumn.rawName, selfTableRawName, candidates);

                if (!bestCandidate)
                        return;

                let relation = new TableRelation();
                relation.selfColumn = selfColumn.name;
                relation.otherTable = bestCandidate.name;

                // pick most possible relation column from other table
                relation.otherTableColumn = this._customerOtherTableColumnSelector
                        ? this._customerOtherTableColumnSelector(selfColumn.rawName, this._tables[bestCandidate.name])
                        : this._defaultOtherTableRelationColumnSelector(selfColumn.rawName, this._tables[bestCandidate.name]);

                relation.relationType = this._analyzeRelationType(bestCandidate.name);

                if (!relations[table])
                        relations[table] = [];

                relations[table].push(relation);
        }

        /**
         * Default keyword generator(column raw name segs and table raw name segs)
         * 
         * @param {String} columnRawName 
         * @param {String} tableRawName 
         * @returns {String}
         */
        _defaultSearchKeyWordsGenerator(columnRawName, tableRawName) {
                let keywords = this._normolizeColumnName(columnRawName);
                let tableSegs = tableRawName.toLowerCase().split("_");
                let set = new Set(tableSegs);

                // pick keyword from table name
                DEFAULT_KEYWORD_CANDIATE.forEach(candidate => {
                        if (set.has(candidate)) {
                                keywords += `_${candidate}`;
                        }
                })

                return `${tableSegs[0]}_${keywords}`;
        }

        /**
         * Default best resutl matcher
         * 
         * @param {String} columnRawName 
         * @param {String} tableRawName 
         * @param {[SearcherResult]} results 
         */
        _defaultBestResultsMatcher(columnRawName, tableRawName, results) {

                // normalize 
                let columnSegs = this._normolizeColumnName(columnRawName.toLowerCase()).split("_");
                if (columnSegs[columnSegs.length - 1] == "")
                        columnSegs.pop();

                let best;
                for (const result of results) {

                        // self table skip
                        if (result.content.toLowerCase() == tableRawName.toLowerCase())
                                continue;

                        // set default highest score best if has not set yet    
                        if (!best)
                                best = result;

                        let tableSegs = result.content.toLowerCase().split("_");

                        // remove useless suffix
                        if (this._uselessSuffix.has(tableSegs[tableSegs.length - 1]))
                                tableSegs.pop();

                        // same end seg ,return
                        if (columnSegs[columnSegs.length - 1] == tableSegs[tableSegs.length - 1])
                                return result;
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
                columnName = columnName.toLowerCase();
                return STR.replace(columnName, {
                        "_no": "",
                        "_id": "",
                        id: "",
                        no: "",
                });
        }

        /**
         * Get relation column from other table
         * 
         * @param {String} selfColumn  raw name
         * @param {Table} otherTable 
         */
        _defaultOtherTableRelationColumnSelector(selfColumn, otherTable) {
                return this._getPrimaryKeyColumn(otherTable);
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
