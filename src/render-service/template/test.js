const {EjsRender} =require("./../../renders");
const { FILE } = require("../../libs");

function main(){
   let render = new EjsRender("./");

    let content= render.renderContent(FILE.read("create-table-sql.ejs"),FILE.readJson("create-table.json"));
    FILE.write("1.sql",content);
}

main();