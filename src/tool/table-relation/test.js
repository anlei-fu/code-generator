const { TableRelationAnalyzer } = require("./table-relation-analyzer");
const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { OBJECT } = require("./../../libs/utils");


function main(project) {
        DIR.create("./outputs");
        let {all}=require(`./../oracle-table-info-resolver/outputs/${project}/all`);
        let analyzer = new TableRelationAnalyzer(all);
        let results = analyzer.analyze();
        FILE.write(`./outputs/${project}.js`, OBJECT.export_(results,"relations"));
}

/*----------------------------------------------------------------main-------------------------------------------------------------------------------------------*/
main("18");