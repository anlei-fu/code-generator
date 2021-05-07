const { DaoGenerator } = require("./dao-genertator");
const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");

const { FILE, STR } = require("./../../libs");
function main() {
    let generator = new DaoGenerator();
    Object.keys(all).forEach(x => {
        let name = all[x].name;
        FILE.write(`./output/dao/${STR.upperFirstLetter(x)}Dao.java`, generator.generate(all[x]));

    });
}

/***********************************main*************************************************************************8 */
main();