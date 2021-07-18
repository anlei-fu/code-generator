const {EjsRender} =require("../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("js-const.ejs"),FILE.readJson("enum.json"));
    FILE.write("js-const.js",content);
}

main();