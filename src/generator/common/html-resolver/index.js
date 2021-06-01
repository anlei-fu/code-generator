const { FILE} = require("../../../libs");
const { resolve } = require("./table-resolver");

function main(file) {
        let tabs = resolve(FILE.read("1.html"))
        FILE.writeJson(`./output/${file}.json`,tabs,true)

}

main("OracleDataType");