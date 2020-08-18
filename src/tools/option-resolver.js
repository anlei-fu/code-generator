const {options} =require("./options.js");
const { STR } = require("./../libs/str");
const { FILE } = require("../spider/utils/file.js");

function main(){
   let content="utils.options([\r\n";
   options.forEach(o=>{
      content+=`"${o.value}",\r\n`;
   });
   content+="]),";
   FILE.write("./output.js",content);
}
main();