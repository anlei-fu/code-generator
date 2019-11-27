/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 09:46:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-27 11:20:20
 */
var cheerio = require("cheerio");
var { FILE } = require("./../libs/file");
let start = new Date().getTime();
let src=FILE.read("1.html");
var $ = cheerio.load(src, { normalizeWhitespace: true, });
let elapse = (new Date().getTime()) - start;
console.log("length:"+src.length);
console.log("elapse:"+elapse);
// 1. Children ("a") return all sub-child not direct
// 2. text return all inner html not only self's innerText
// 3. parent return parent element
// 4. sublings direct include left and right
// 5. children represent "get all" ,not only direct
// 6. html() just return children content  not include self 
// 7. not all element has text() method
// 8. first is not the first-children, just first index of result collection
let length = $("table").children("thead").find("th").length;
console.log(length);






