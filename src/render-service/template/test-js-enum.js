const {EjsRender} =require("../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("js-enum.ejs"),FILE.readJson("js-enum.json"));
    FILE.write("js-enum.js",content);
}

main();