/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 09:46:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-01 14:40:34
 */
var cheerio=require("cheerio");
var {FILE} =require("./../libs/file");
var $ =cheerio.load(FILE.read("1.html"));

// var a =$("body").children("div")   // all div
//                 .children("a");  // all a

// Children ("a") return all sub-child not direct
// text return all inner html not only self's innerText
// parent return parent element
// sublings direct include left and right
var a= $("div").siblings("a");

 for (let i=0;i<a.length;i++) {
         console.log($(a[i]).text());
 }

 var text= a.text(); //last a's inner-text

 // $("body").children("div")[1]  => element
 //$("body").children("div").get(1) =>element
 // $($("body").children("div")[1]) =>jq-element-collection
 // $(element) => jq-element
 //$ can do select ,convert
 // $ root => html
 //$(element) => reset root to element
 // select ,childen,  
 // sublings all not left or right
console.log(text);
console.log( a.length);


