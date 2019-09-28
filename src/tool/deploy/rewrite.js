/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 13:33:33
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 13:55:14
 */
const { FILE } = require("./../libs/file");
const pattern = "main(@);"
// Read parameters inputed by .bat commond
var txt = FILE.read("1.txt");
var params = txt.split(" ");

var js = FILE.read("index.js");
var pattern = "// run main";
var index = js.indexOf("// run main");
js = js.substr(0, index + 1 + pattern.length);
//Build params str
var paramsStr = "[";
for (w of params) {
    if (w.trim() != "")
        paramsStr += `"${w.trim()}",`;
}

if (paramsStr.charAt(paramsStr.length - 1) == ",")
    paramsStr = paramsStr.substr(0, paramsStr.length - 1);
paramsStr += "]";
//Replace file
FILE.write("index.js", js + pattern.replace("@", paramsStr));
