/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 09:46:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 11:50:02
 */
var cheerio=require("cheerio");
var {FILE} =require("./../libs/file");
var $ =cheerio.load(FILE.read("1.html"));

var a =$("body").children("div")   // all div
                .children("a");  // all a
 var text= a.text(); //last a's inner-text

 // $("body").children("div")[1]  => element
 //$("body").children("div").get(1) =>element
 // $($("body").children("div")[1]) =>jq-element-collection
 // $(element) => jq-element
 //$ can do select ,convert
 // $ root => html
 //$(element) => reset root to element
 // select ,childen,  
console.log(text);
console.log( a.length);


