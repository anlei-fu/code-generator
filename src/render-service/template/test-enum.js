const {EjsRender} =require("./../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("enum.ejs"),FILE.readJson("enum.json"));
    FILE.write("enum.java",content);
}

main();