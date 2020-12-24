const {MockGenerator} =require("./mock-data-generator");
const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");

const { FILE, STR } = require("./../../libs");
function main(){
        let generator =new MockGenerator();
        Object.keys(all).forEach(x=>{
            FILE.write(`./output/mock/${STR.upperFirstLetter(x)}.java`,generator.generate(all[x]));
        });
}

/***********************************main*************************************************************************8 */
main();