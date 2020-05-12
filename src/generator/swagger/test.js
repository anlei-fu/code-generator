const {FILE} =require("./../../libs/file");
const {SwaggeApiResolver} =require("./SwaggerApiResolver");

function main(){
        let analyzer =new SwaggeApiResolver();
       let groups= analyzer.resolve(JSON.parse(FILE.read("./1.json")));
       FILE.write("2.json",JSON.stringify(groups,null,"\t"));
}

main();