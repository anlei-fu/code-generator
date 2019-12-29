const { TableRelationAnalyzer } = require("./relation");
const { tables } = require("./../oracle-table-info-resolver/outputs/fd/tables");
const { FILE } = require("./../../libs/file")


function main() {
        let analyzer = new TableRelationAnalyzer(tables);
        let results = analyzer.analyze();
        FILE.write("test.json", JSON.stringify(results, null, "\t"));
}

/*----------------------------------------------------------------main-------------------------------------------------------------------------------------------*/
main();