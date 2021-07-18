const {EjsRender} =require("../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("const.ejs"),FILE.readJson("enum.json"));
    FILE.write("const.java",content);
}

main();