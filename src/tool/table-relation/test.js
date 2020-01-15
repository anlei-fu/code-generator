const { TableRelationAnalyzer } = require("./table-relation-analyzer");
const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { OBJECT } = require("./../../libs/utils");
const {MarkdownWriter}=require("./markdown-generator");


function main(project) {
        DIR.create("./outputs");
        let {all}=require(`./../oracle-table-info-resolver/outputs/${project}/all`);
        DIR.create(`./outputs/${project}`);
        let analyzer = new TableRelationAnalyzer(all);
        let results = analyzer.analyze();
        let writer =new MarkdownWriter(results,10);
        FILE.write(`./outputs/${project}.js`, OBJECT.export_(results,"relations"));
       writer.generateMarkdown().forEach(x=>{
        FILE.write(`./outputs/${project}/${x.name}.md`, x.content );
       })
       
}

/*----------------------------------------------------------------main-------------------------------------------------------------------------------------------*/
main("zd");