
const { DEFAULT_MATCHER_COLLECTION_METHOD, DEFAULT_MATCHER_METHOD } = require("./matchers");
const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");

const INSERT_EXCLUDES_MATCHERS = {
        int: {
                id: {
                        match: x => x == "Id" || x == "No",
                }
        },
        string: {
                user: {
                        match: x => {
                                let lower = x.toLowerCase();
                                if (!lower.includes("user"))
                                        return false;

                                return lower.includes("create") || lower.includes("update") || lower.includes("edit");
                        }
                },
        },
        DateTime: {
                time: {
                        match: x => {
                                let lower = x.toLowerCase();
                                if (!lower.includes("time") && !lower.includes("date"))
                                        return false;

                                return lower.includes("create") || lower.includes("update") || lower.includes("edit");
                        }
                },
        }
}

/**
 * Analyze Insert candidate
 */
class InsertAnalyzer {
        constructor () {
                this._insertExcludes = INSERT_EXCLUDES_MATCHERS;
        }

        /**
         * Check should column be excluded
         * 
         * @param {Column} column 
         */
        shouldBeCandidate(column) {
                if (column.isPk)
                        return false;

                return !DEFAULT_MATCHER_COLLECTION_METHOD(column.name, column.type, this._insertExcludes)
        }

        /**
         * Config insert excludes
         * 
         * @param {MatcherConfig} config 
         */
        useInsertExclude(config) {
                OBJECT.deepExtend(this._insertExcludes, config);
        }
}


const SELECT_INCLUDES_MATCHERS = {
        string: {
                type:{
                     match:  x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state"
                        ])
                },
                all: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "no",
                                "email",
                                "phone",
                                "mobile",
                                "order",
                                "idcardno"
                        ])
                },
        },
}

const SELECT_EXCLUDES_MATCHERS = {
        int: {
                all: {
                        match: x => !STR.endsWithAny(x.toLowerCase(), [
                                "balance",
                                "count",
                                "amount",
                                "price",
                                "order",
                                "total"
                        ])
                },
        },
        decimal: {
                all: {
                        match: x => !STR.endsWithAny(x.toLowerCase(), [
                                "balance",
                                "count",
                                "amount",
                                "price",
                                "order",
                                "total"
                        ])
                },
        },
}

/**
 * Analyze select candidates fields
 */
class SelectAnalyzer {
        constructor () {
                this._stringIncludesMatchers = SELECT_INCLUDES_MATCHERS;
                this._intExcludesMatchers = SELECT_EXCLUDES_MATCHERS;
                this.controlAnalyzer;
        }

        /**
         * Analyze select candidate
         * 
         * @param {Column} column 
         * @returns {boolean}
         */
        shouldBeCandidate(column) {

                // excludes all DateTime field
                if (column.type == "DateTime")
                        return false;

                // analyze string includes
                if (column.type == "string")
                        return DEFAULT_MATCHER_COLLECTION_METHOD(column.name, "string", this._stringIncludesMatchers);

                return this.controlAnalyzer.shouldBeSelect(column);
        }
}



/**
 * Text areas 
 */
const TEXT_AREAS = {
        all: {
                match: x => STR.endsWithAny(x.toLowerCase(), [
                        "remark",
                        "descrp",
                        "message",
                        "msg",
                        "info",
                        "detail",
                        "log",
                ])
        }
}

const { NamingStrategy } = require("../../libs/naming-strategy");

/**
 * Analyze column :
 *    table header
 *    table content
 *    control
 *    join expression
 *    select output column
 */
class ColumnAnalyzer {

        constructor () {
                this.controlAnalyzer;
                this.index = 0;
                this._textArea = TEXT_AREAS;
                this._tables;
        }

        /**
         * Analyze column
         * 
         * @param {Column} column 
         * @returns {AnalyzeColumnResult}
         */
        analyzeColumn(column) {
                let output = {

                }
                if (this.controlAnalyzer.shouldBeSelect(column)) {
                        output.select = this.controlAnalyzer.getSelectControlConfig(column);
                        output.lable = column.description;
                        output.join = this.makeJoin(column, output.select);

                        let outputName = `${column.name.replace("No", "").replace("Id", "")}Name`;


                        let nameColumn;
                        if (output.select.table.toLowerCase().includes("dictionary")) {
                                nameColumn = "NAME " + outputName;
                        } else {
                                nameColumn = STR.replace(column.rawName, {
                                        "UP_": "",
                                        "DOWN_": "",
                                        "_ID": "",
                                        "_NO": "",
                                        "_NAME": ""
                                }) + "_NAME " + outputName;
                        }

                        output.gettter = `.GetDataValue("${outputName}")`;
                        output.column = `t${this.index}.${nameColumn}`;
                } else {
                        output.gettter = `.${column.name}`;
                        output.column = `t.${NamingStrategy.toHungary(column.name).toUpperCase()}`;
                        output.text = {
                                lable: column.description,
                                name: column.name,
                                textArea: this.isTextArea(column.name)
                        }
                }

                return output;
        }

        /**
         * Should be text area controle
         * 
         * @param {String} name 
         * @returns {boolean}
         */
        isTextArea(name) {
                for (const c in this._textArea) {
                        let match = this._textArea[c].match ?
                                this._textArea[c].match(name) :
                                name.toLowerCase().includes(c.toLowerCase());

                        if (match)
                                return true;
                }

                return false;
        }

        /**
         * Make join expression
         * 
         * @param {Column} column 
         * @param {String} select  name
         */
        makeJoin(column, select) {
                if (select.table.toLowerCase().endsWith("dictionary")) {
                        return `LEFT JOIN ${NamingStrategy.toHungary(select.table).toUpperCase()} t${++this.index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this.index}.VALUE`
                                + ` AND t${this.index}.${NamingStrategy.toHungary(select.type).toUpperCase()} = '${column.name}'`;
                } else {
                        select.name = select.name || select.value;
                        let suffix = NamingStrategy.toHungary(STR.replace(select.name, { "up": "", "down": "" })).toUpperCase()
                        return `LEFT JOIN ${NamingStrategy.toHungary(select.table).toUpperCase()} t${++this.index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this.index}.${suffix}`;
                }
        }

        useTables(tables) {
                this._tables = tables;
        }
}





/**
 * Analyze control of field , text or select
 */
class ControlAnlyzer {
        constructor (dic, relations = {}, customer = {}) {
                this._dictionaryMatchers = dic;
                this._relationMatchers = relations;
                this._customerSelectMatchers = customer;
        }

        /**
         * Check should generate select control
         * 
         * @param {Column} column 
         * @returns {boolean}
         */
        shouldBeSelect(column) {

                if (!this._customerSelectMatchers[column.type])
                        return false;


                // check by system dictionary
                for (const c in this._dictionaryMatchers) {
                        if (c.toLowerCase() == column.name.toLowerCase())
                                return true;
                }

                for (const c in this._relationMatchers) {
                        if (c.toLowerCase() == column.name.toLowerCase())
                                return true;
                }

                return DEFAULT_MATCHER_COLLECTION_METHOD(column.name, column.type, this._customerSelectMatchers);
        }

        /**
         * Get select control config
         * 
         * @param {Column} column 
         * @return {SelectControlConfig}
         */
        getSelectControlConfig(column) {
                for (const c in this._relationMatchers) {
                        if (c.toLowerCase() == column.name.toLowerCase())
                                return this._relationMatchers[c];
                }

                // get from system dictionary
                for (const c in this._dictionaryMatchers) {
                        if (c.includes(column.name))
                                return this._dictionaryMatchers[c];
                }

                // get from customs
                for (const item in this._customerSelectMatchers[column.type]) {
                        let match = DEFAULT_MATCHER_METHOD(column.name, column.type, item, this._customerSelectMatchers);
                        if (match) {
                                return this._customerSelectMatchers[column.type][item].generator ?
                                        this._customerSelectMatchers[column.type][item].generator(column.name) :
                                        this._customerSelectMatchers[column.type][item];
                        }
                }
        }

        useDictionaryMatchers(dic) {
                this._dictionaryMatchers = dic;
        }

        useRelation(relations) {
                this._relationMatchers = relations;
        }

        useCustomerMatchers(customer) {
                this._customerSelectMatchers = customer;
        }
}

/**
 * Create default values
 */
const CREATE_DEFAULT_VALUES = {
        string: {
                user: {
                        match: x => x.toLowerCase().includes("user") && x.toLowerCase().includes("create"),
                        generator: x => `entity.${x} = LoginStatus.UserName`
                }
        },
        DateTime: {
                time: {
                        match: x => (x.toLowerCase().includes("time") || x.toLowerCase().includes("date")) && x.toLowerCase().includes("create"),
                        generator: x => `entity.${x} = DateTime.Now()`
                }
        }
}

/**
 *  Update default values
 */
const UPDATE_DEFAULT_VALUES = {
        string: {
                user: {
                        match: field => {
                                let lower = field.toLowerCase();
                                return lower.includes("user")
                                        && (lower.includes("update")
                                                || lower.includes("edit")
                                        );
                        },
                        generator: field => `entity.${field} = LoginStatus.UserName`
                }
        },
        DateTime: {
                time: {
                        match: field => {
                                let lower = field.toLowerCase();
                                return (lower.includes("time")
                                        || lower.includes("date")
                                )
                                        && (lower.includes("update")
                                                || lower.includes("edit")
                                        );
                        },
                        generator: field => `entity.${field} = DateTime.Now()`
                }
        }
}


/**
 * Analyze default values
 */
class DelfaultValueAnalyzer {

        constructor () {
                this._updateDefaultValuesMatchers = UPDATE_DEFAULT_VALUES;
                this.createDefaultValues = CREATE_DEFAULT_VALUES;
        }

        /**
         * Analyze update and insert default values
         * 
         * @param {Table} table 
         * @return {{updates:{name:String,expression:String},creates:{name:String,expression:String}}}
         */
        analyzeTable(table) {
                let ret = {
                        updates: [],
                        creates: [],
                };

                // analyze insert
                OBJECT.forEach(table.columns, (_, column) => {

                        if (!this.createDefaultValues[column.type]
                                || !this._updateDefaultValuesMatchers[column.type])
                                return;

                        let type = column.type;

                        for (const key in this.createDefaultValues[type]) {
                                let match = DEFAULT_MATCHER_METHOD(column.name, column.type, key, this.createDefaultValues);
                                if (match) {
                                        let item = {
                                                name: column.name,
                                                expression: this.createDefaultValues[type][key].generator(column.name),
                                        }

                                        ret.creates.push(item);

                                        break;
                                }
                        }

                        // analyze update
                        for (const key in this._updateDefaultValuesMatchers[type]) {
                                let match = DEFAULT_MATCHER_METHOD(column.name, column.type, key, this._updateDefaultValuesMatchers);
                                if (match) {
                                        let item = {
                                                name: column.name,
                                                expression: this._updateDefaultValuesMatchers[type][key].generator(column.name),
                                        }

                                        ret.updates.push(item);

                                        break;
                                }
                        }
                });

                return ret;
        }
}

module.exports = {
        InsertAnalyzer,
        SelectAnalyzer,
        ControlAnlyzer,
        ColumnAnalyzer,
        DelfaultValueAnalyzer
}