/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-24 13:54:11
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-26 15:17:40
 */
var { STR } = require("./../libs/str")
var { FILE } = require("./../libs/file")
/**
 * replace string many times
 * @param {Option} map 
 * @param {String?} input  file
 * @param {String?} output  file
 */
function replace(map, input, output) {
        input = input || "input";
        output = output || "output";
        let text = FILE.read(input);
        text = STR.replace(text, map);
        FILE.write(output, text);
        console.log("Completed!");
}
// do work
replace({ tr: "th", td: "th" });