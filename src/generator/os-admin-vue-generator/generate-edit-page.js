const { EditPageGenerator } = require("./edit-page-generator")

const { all } = require("../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR, OBJECT } = require("../../libs");

function main(tables) {
   let generator = new EditPageGenerator();
   tables.forEach(x => {
      let name = STR.upperFirstLetter(x.name);
      name = name.substr(2, name.length - 2);
      FILE.write(`./output/modal/${name}Edit.vue`, generator.generate(x));
   })
}


/***************************************************main************************************************/

main(OBJECT.toArray(all));