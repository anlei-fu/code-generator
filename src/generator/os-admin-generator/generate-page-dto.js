const { DtoGenerator } = require("./page-dto-generator")

const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR, OBJECT } = require("./../../libs");

function main(tables) {
   let generator = new DtoGenerator();
   tables.forEach(x => {
      let name = STR.upperFirstLetter(x.name);
      name = name.substr(2, name.length - 2);
      FILE.write(`./output/dto/${name}PageDTO.java`, generator.generate(x));
   })
}
/***************************************************main************************************************/

main(
   OBJECT.toArray(all)
)