const { STR } = require("../../libs");
const { MySqlTableDefinationParser } = require("./mysql-table-ddl-parser");
const { Table } = require("./Table");


class MySqlDDLParser {
        /**
         * Parse mysql table defination sql
         * 
         * @param {String} str 
         * @returns {[Table]}
         */
        parse(str) {
                let tables = [];
                // remove comment
                str = STR.removeWithMatchMany(str, [{ left: "--", right: "\r\n" }, { left: "/*", right: "*/" }])
                        .toLowerCase();

                str.split(";")
                        .filter(x => x.trim().startsWith("create table"))
                        .forEach(
                                x => {
                                        tables.push(new MySqlTableDefinationParser(x).parse());
                                }
                        );

                return tables;
        }
}

exports.MySqlDDLParser = MySqlDDLParser