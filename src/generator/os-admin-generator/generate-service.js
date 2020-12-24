const {ServiceGenerator} =require("./service-generator");

const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR } = require("./../../libs");

function main(){
   let generator =new ServiceGenerator();
   let tables =[];
   Object.keys(all).forEach(x=>{
           tables.push(all[x]);
   });

   tables.forEach(x=>{
      let name =STR.upperFirstLetter(x.name);
      name =name.substr(2,name.length-2);
      FILE.write(`./output/service/${name}Service.java`,generator.generate(x));
   })
}
/***************************************************main************************************************/

main();