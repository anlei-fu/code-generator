const { FILE } = require("../../libs");
const { MySqlDDLParser } = require("./mysql-ddl-parser");

function main() {
        let tables = new MySqlDDLParser().parse(FILE.read("1.sql"));
        FILE.writeJson("1.json", tables, true);
}

/************************************************************** */
main();