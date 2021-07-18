const {EjsRender} =require("../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("js-entity.ejs"),FILE.readJson("js-entity.json"));
    FILE.write("js-entity.js",content);
}

main();