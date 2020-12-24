
const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");

const { FILE, STR } = require("./../../libs");
const { GenerateEnity } = require("./generate-entity");


function main() {
        let generator = new GenerateEnity();
        Object.keys(all).forEach(x => {
                let content = generator.generate(all[x]);
                FILE.write(`./output/entity/${STR.upperFirstLetter(x)}DO.java`, content);
        })
}
/*******************************main**************************************************************** */
main();