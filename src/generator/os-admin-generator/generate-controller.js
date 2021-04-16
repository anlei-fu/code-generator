const { ControllerGenerator } = require("./controller-generator");

const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR, OBJECT } = require("./../../libs");

function main() {
   let generator = new ControllerGenerator();
   let tables = [];
   Object.keys(all).forEach(x => {
      tables.push(all[x]);
   });
   tables.forEach(x => {
      let name = STR.upperFirstLetter(x.name);
      name = name.substr(2, name.length - 2);
      FILE.write(`./output/controller/${name}Controller.java`, generator.generate(x));
   })
}
/***************************************************main************************************************/

main(
   OBJECT.toArray(all)
)