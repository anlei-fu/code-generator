const {TableRelationMarkdownGenerator} = require("./../../TableRelationMarkdownGenerator");
const { FILE } = require("./../../../../../libs/file");


function main(project){
  let generator = new TableRelationMarkdownGenerator(require(`./outputs/${project}/relations`).relations);
  let mks= generator.generateMarkdown();
  let content ="";
  mks.forEach(x=>{
     content+=x.content;
  });
  FILE.write(`./outputs/${project}/relation-graph.md`,content);
}

/****************************************************main************************************************************************88 */
main("dm");