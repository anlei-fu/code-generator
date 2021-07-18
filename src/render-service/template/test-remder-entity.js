const {EjsRender} =require("./../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("entity.ejs"),FILE.readJson("entity.json"));
    FILE.write("1.java",content);
}

main();