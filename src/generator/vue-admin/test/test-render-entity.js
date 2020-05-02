const { EjsRender } = require("./../../common/renders/EjsRender");

function main() {
        let render = new EjsRender("./../template");
        let entity = {
                name: "Greate",
                fields: [{
                        name: "aa",
                        type: "\"\"",
                        description: "aaaaaaa",
                }, {
                        name: "aa",
                        type: "\"\"",
                        description: "aaaaaaa",
                }],
              //  parent: "Wonderful"


        }
        render.render("./../template/entity.ejs", "./outputs/1.js", entity);
}

/***********************************************main**********************************/
main();