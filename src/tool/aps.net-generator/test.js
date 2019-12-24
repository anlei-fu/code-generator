const {OBJECT}=require("./../../libs/utils")
const{init} =require("./initializer")
const {FILE}=require("./../../libs/file")
let table=JSON.parse(FILE.read("./table.json"));

function test(){
     let config= {
        delete:true,
        add:true,
     }
     init(table,config);
     FILE.write("./output/test.js",OBJECT.text(config,"test"));
}

test();