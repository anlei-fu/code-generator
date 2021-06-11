const { STR, FILE } = require("../libs");
const { tokenize, SequenceReader } = require("./../tokenization")

class MySqlDDLParser {
        /**
         * 
         * @param {String} str 
         */
        parse(str) {
                let tables = [];
                str = STR.removeWithMatchMany(str, [{ left: "--", right: "\r\n" }, { left: "/*", right: "*/" }]).toLowerCase();
                str.split(";").filter(x.startsWith("create table")).forEach(x => {
                        tables.push(new TableDefinationParser(x));
                });


        }


}

class TableDefinationParser {
        constructor (str) {
                this._source = str;
                this._reader = new SequenceReader(tokenize(str));
        }

        parse() {
                let table = { columns: [], indexed: [] };
                let next = this._reader.next(2);
                next = this.checkHasNext("table name not exists");
                table.name = next.value;
                next = this.checkHasNext("skip '('");
                if (next.value != "(") {
                        throw new Error(`expected '(', but got ${next.value}`);
                }

                while (true) {
                        next = this.checkHasNext("unexcepted ending");
                        if (next.type == "string") {
                                this._reader.previous();
                                table.columns.push(this.parseColumn());
                        } else {
                                if (next.value == ")") {
                                        table.description = this.parseTableComment();
                                        break;
                                } else if (next.value == "primary") {
                                        table.indexes.push(this.parsePrimaryKey());
                                } else if (next.value == "key") {
                                        table.indexes.push(this.parseIndex());
                                } else if (next.value == "unique") {
                                        table.indexes.push(this.parseUnique());
                                } else {

                                }
                        }
                }

                return table;
        }

        parseColumn() {
                let column = {};
                column.name = this._reader.next();
                if (!this._reader.hasNext()) {
                        throw new Error();
                }

                column.sqlType = this._reader.next();
                if (!this._reader.hasNext()) {
                        throw new Error();
                }

                let next = this._reader.next();
                if (next.value == "(") {
                        column.length = this.parseLength;
                }

                while (true) {
                        let next = this.checkHasNext();
                        if (next.value == "not") {
                                next = this.checkHasNext();
                                if (next.value != 'null') {

                                }

                                column.nullable = false;
                        } else if (next.value == "comment") {
                                next = this.checkHasNext();
                                if (next.type != "string") {

                                }
                                column.description = next.value;

                        } else if (next.value == "auto_increment") {
                                column.autoIncrement = true;
                        } else if (next.value == "default") {
                                let next = this.checkHasNext();
                                column.defaultValue = next.value;
                        } else if (next.value == ",") {

                        } else if (next.value == ")") {

                        } else {

                        }
                }

        }

        parsePrimaryKey() {

        }

        parseUnique() {

        }

        parseIndex() {

        }

        parseLength() {

        }

        checkHasNext(msg) {
                if (!this._reader.hasNext()) {
                        throw new Error(msg);
                }

                return this._reader.next();
        }

        parseTableComment() {

        }
}

let parser = new MySqlDDLParser();
parser.parse(FILE.read("1.sql"));