/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-02 17:45:02
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-02 17:50:44
 */
const { FILE } = require("./../../libs/file")
const { formatCore } = require("./../format")
const { parserTable } = require("./../db-info-resolver")

function main() {
        let source = formatCore(FILE.read("./1.html"))
        let json = JSON.stringify(parserTable(source), null, "\t");
        FILE.write("./output.json", json)
}

/***********************************main********************************/
main();