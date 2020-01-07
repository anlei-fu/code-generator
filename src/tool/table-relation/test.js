const { TableRelationAnalyzer } = require("./relation");
const { all } = require("./../oracle-table-info-resolver/outputs/fd/all");
const { FILE } = require("./../../libs/file")


function main() {
        let analyzer = new TableRelationAnalyzer(all);
        let results = analyzer.analyze();
        FILE.write("test.json", JSON.stringify(results, null, "\t"));
}

/*----------------------------------------------------------------main-------------------------------------------------------------------------------------------*/
main();