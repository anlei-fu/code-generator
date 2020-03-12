const {MockGenerator}=require("./mock-generator");
const {all}= require("./../oracle-table-info-resolver/outputs/fc/all");
const {getJavaType} =require("./../spring-boot-generator/utils");

function main(){
  let generator =new MockGenerator();
  let columns=all.fcDownChannel.columns;
  Object.keys(columns).forEach(columnName=>{
     let type =getJavaType(columns[columnName].type);
     const result=generator.getMockData(columnName,type)
     console.log(`${columnName}:${result}`);
  });
  generator.getMockData();
}

/************************************************************main************************************************************************************ */
main();