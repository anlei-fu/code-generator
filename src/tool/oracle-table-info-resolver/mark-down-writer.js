const {FILE} =require("./../../libs/file");
const {OBJECT} =require("./../../libs/utils");
const {all} =require("./outputs/zd/all.js");
const {}=require()


function writeMarkDown(){
       let tables =OBJECT.toArray(all).sort((x,y)=>y.name-x.name);
       tables.forEach(table=>{

       });
}
