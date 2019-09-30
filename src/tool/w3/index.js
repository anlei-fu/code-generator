/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 11:07:03
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 11:19:07
 */
const { FILE } = require("../../libs/file");
function main() {
        let data = "";
        for (line of FILE.readLines("input")) {
                let segs = line.split("\t");
                data += `| ${segs[0]} | ${segs[1]}`;
                for (i = 2; i < segs.length; i++) {
                        data += segs[i].trim() + "  ";
                }
                data += "|\r\n";
        }
        FILE.write("output", data);
}
main();