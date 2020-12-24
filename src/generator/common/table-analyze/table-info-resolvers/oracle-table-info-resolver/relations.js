const {TableRelationAnalyzer} =require("./../../TableRelationAnalyzer");
const { FILE } = require("./../../../../../libs/file");
const { OBJECT } = require("./../../../../../libs/utils");

function relation(project){
  let analyzer = new TableRelationAnalyzer(require(`./outputs/${project}/all.js`).all);
   FILE.write(`./outputs/${project}/relations.js`,OBJECT.export_(analyzer.analyze(),"relations"));
}

/*******************************************************************************************************/
relation("os");