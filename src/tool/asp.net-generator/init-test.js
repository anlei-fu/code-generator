const { init } = require("./initializer")
const { FILE } = require("../../libs/file")
let table = JSON.parse(FILE.read("./resource/table.json"));

function test() {
   let config = {
      delete: true,
      add: true,
      project: "QXFC",
   }
   init(table, config);
}

test();