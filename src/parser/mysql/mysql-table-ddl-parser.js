
const { tokenize, SequenceReader, Token } = require("../../tokenization")
const { STR } = require("../../libs");
const { Table } = require("./Table");
const { Column } = require("./Column");
const { Index } = require("./Index");
const { Constraint } = require("./Constraint");
const { ARRAY } = require("../../libs/array");


class MySqlTableDefinationParser {
        /**
         * Constructor of MySqlTableDefinationParser
         * 
         * @param {String} str 
         */
        constructor(str) {
                this._source = str.trim() + ";";
                this._reader = new SequenceReader(tokenize(this._source).filter(x => x.type != 'blank'));
                this._table = {
                        columns: [],
                        indexes: [],
                        constraints: []
                };
        }

        /**
         * Parse table info from table defination sql
         * 
         * 
         * @returns {Table}
         */
        parse() {

                // skip create table
                let next = this._reader.next(2);
                next = this._getNextToken("table name not exists");
                this._table.name = next.value;
                next = this._getNextToken("skip '(' after create table");
                if (next.value != "(") {
                        throw new Error(`expected '(', but got ${next.value}`);
                }

                while (true) {
                        next = this._getNextToken("unexcepted ending");
                        if (next.value == ";") {
                                break;
                        }

                        if (next.value == "comment") {
                                next = this._getNextToken();
                                next = this._getNextToken();
                                this._table.description = next.value;
                                continue;
                        }

                        // column defination start
                        if (next.type == "string") {
                                this._reader.back();
                                try {
                                        this._table.columns.push(this._parseColumnInfo());
                                } catch (ex) {
                                        let column = this._table.columns.length > 0 ? this._table.columns[this._table.columns.length - 1].name : "";
                                        throw new Error(ex.message + ` ,parse column faield after ${column} in ${this._table.name}`);
                                }
                        } else {
                                if (STR.equalAny(next.value, ["primary", "key", "unique", "fulltext"])) {

                                        let type = next.value;
                                        if (next.value == "key") {
                                                this._reader.back();
                                                type = "index";
                                        }
                                        try {
                                                let index = this._parseIndexInfo(type);
                                                this._table.indexes.push(index);
                                        } catch (ex) {
                                                throw new Error(ex.message + `parse index faield in ${this._table.name}`)
                                        }

                                } else if (next.value == "constraint") {
                                        try {
                                                this._parseConstraint();
                                        } catch (ex) {
                                                throw new Error(ex.message + `parse constraint faield in ${this._table.name}`)
                                        }
                                } else if (next.value == "foreign") {
                                        try {
                                                this._table.constraints.push(this._parseForeignConstraint());
                                        } catch (ex) {
                                                throw new Error(ex.message + ` parse foreign failed in ${this._table.name}`)
                                        }
                                }
                        }
                }

                let primary = ARRAY.firstOrDefault(this._table.indexes.filter(x => x.type == "primary"));
                if (primary) {
                        if (primary.columns.length == 1) {
                                let column = ARRAY.firstOrDefault(this._table.columns.filter(x => x.name == primary.columns[0]));
                                if (column) {
                                        column.isPrimaryKey = true;
                                }

                                this._table.indexes = this._table.indexes.filter(x => x.type != "primary" && x.columns.length != 1);
                        }
                }

                return this._table;
        }

        /**
         * Parse column info
         * 
         * @private
         * @returns {Column}
         */
        _parseColumnInfo() {
                let column = {};
                column.name = this._reader.next().value;
                let next = this._getNextToken("got column sql-type");
                column.sqlType = next.value;
                next = this._getNextToken("try get length prefix '('");
                if (next.value == "(") {
                        next = this._getNextToken("get column length");
                        if (next.type != 'number') {
                                throw new Error(`unexcepted length value '${next.value}'`);
                        }
                        column.length = next.value;
                        next = this._getNextToken();
                        if (next.value != ')') {
                                throw new Error(`excepted length ending ')' ,but got '${next.value}'`);
                        }
                } else {
                        this._reader.back();
                }

                while (true) {
                        let next = this._getNextToken();
                        if (next.value == "not") {
                                next = this._getNextToken();
                                if (next.value != 'null') {
                                        throw new Error(`excepted not null ,but got not '${next.value}'`);
                                }

                                column.nullable = false;
                        } else if (next.value == "comment") {
                                next = this._getNextToken();
                                if (next.type != "string") {
                                        throw new Error(`excepted a comment string ,but got not '${next.value}'`);
                                }
                                column.description = next.value;

                        } else if (next.value == "auto_increment") {
                                column.isAutoIncrement = true;
                        } else if (next.value == "default") {
                                let next = this._getNextToken();
                                if (next.value != "null") {
                                        column.defaultValue = next.value;
                                } else {
                                        if (next.type == "string")
                                                column.defaultValue = next.value;
                                }
                        } else if (next.value == "unsigned") {
                                column.unsigned = true;
                        } else if (next.value == ",") {
                                // finish column resolve
                                break;
                        } else if (next.value == ")") {
                                // finish table resolve
                                this._reader.back();
                                break;
                        } else {
                                //  throw new Error(`unexcepted keyword '${next.value}'`);
                        }
                }

                return column;

        }

        /**
         * Resolve Constraint statement
         */
        _parseConstraint() {
                let constraint = {};
                let next = this._getNextToken();
                if (next.type != "string") {
                        throw new Error(`unexcepted constraint name ${next.value}`);
                }
                constraint.name = next.value;

                next = this._getNextToken();
                if (STR.equalAny(next.value, ["primary", "key", "unique", "fulltext"])) {

                        let type = next.value;
                        if (next.value == "key") {
                                this._reader.back();
                                type = "index";
                        }
                        let index = this._parseIndexInfo(type);
                        index.name = constraint.name;
                        this._table.indexes.push(index);
                } else if (next.value == "foreign") {
                        let foreign = this._parseForeignConstraint();
                        foreign.name = constraint.name;
                        this._table.constraints.push(foreign)
                }

        }

        /**
         * Parse index info
         * 
         * @private
         * @param {String} type of 'primary','unique','index'
         * @returns {Index}
         */
        _parseIndexInfo(type) {
                let index = { columns: [], type };
                let next = this._getNextToken();
                if (next.value != 'key') {
                        throw new Error(`excepted get index 'key' word,but got ${next.value}`);
                }
                next = this._getNextToken();
                if (next.type == "string") {
                        index.name = next.value;
                        next = this._getNextToken();
                        if (next.value != '(') {
                                throw new Error(`excepted field start '(',but got ${next.value}`)
                        }
                } else if (next.value != '(') {
                        throw new Error(`excepted field start '(',but got ${next.value}`)
                }

                index.columns = this._parseFieldsCollection();
                next = this._getNextToken();
                if (next.value == ")") {
                        // if finish create-table block resolve
                        this._reader.back();
                }

                return index;
        }

        /**
         * Parse foreign constraint info
         * 
         * @private
         * @returns {Constraint}
         */
        _parseForeignConstraint() {
                let foreign = { selfColumns: [], targetTable: null, targetColumns: [], update: false, delete: false };
                let next = this._getNextToken();
                if (next.value != "key") {
                        throw new Error(`excepted get 'key' ,but got '${next.value}'`);
                }

                next = this._getNextToken();
                if (next.type == "string") {
                        foreign.name = next.value;
                        next = this._getNextToken();
                        if (next.value != "(") {
                                throw new Error(`excepted field start '(',but got ${next.value}`)
                        }
                } else {
                        if (next.value != "(") {
                                throw new Error(`excepted  field start '(',but got ${next.value}`)
                        }
                }

                foreign.selfColumns = this._parseFieldsCollection();

                next = this._getNextToken();
                if (next.value != "references") {
                        throw new Error(`excepted get 'references',but got ${next.value}`)
                }

                next = this._getNextToken();
                if (next.type != "string") {
                        throw new Error(`invalid target table name '${next.value}'`);
                }

                foreign.targetTable = next.value;
                next = this._getNextToken();
                if (next.value != "(") {
                        throw new Error(`excepted  field start '(',but got ${next.value}`)
                }
                foreign.targetColumns = this._parseFieldsCollection();

                while (true) {
                        next = this._getNextToken();
                        if (next.value == "update") {
                                foreign.update = true;
                        } else if (next.value == "delete") {
                                foreign.delete = true;
                        } else if (next.value == ")") {
                                this._reader.back();
                                break;
                        } else if (next.value == ",") {
                                break;
                        }
                }

                return foreign;
        }

        /**
         * Parse fields
         * 
         * @private
         * @returns {[String]}
         */
        _parseFieldsCollection() {
                let fields = [];
                while (true) {
                        let next = this._getNextToken("unexcepted parse fields ending");
                        if (next.value == ",") {

                        } else if (next.value == ")") {
                                break;
                        } else {
                                if (next.type != "string") {
                                        throw new Error(`unexcepted field name '${next.value}'`)
                                }

                                fields.push(next.value);
                        }
                }

                return fields;
        }

        /**
         * Get next token or through msg
         * 
         * @private
         * @param {String} msg to throw 
         * @returns {Token}
         */
        _getNextToken(msg) {
                if (!this._reader.hasNext()) {
                        throw new Error(msg);
                }

                return this._reader.next();
        }
}

exports.MySqlTableDefinationParser = MySqlTableDefinationParser