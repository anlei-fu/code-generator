/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 09:46:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-10 13:02:26
 */
var cheerio=require("cheerio");
var {FILE} =require("./../libs/file");
var $ =cheerio.load(FILE.read("1.html"),{normalizeWhitespace:true,});

// var a =$("body").children("div")   // all div
//                 .children("a");  // all a

// Children ("a") return all sub-child not direct
// text return all inner html not only self's innerText
// parent return parent element
// sublings direct include left and right
// children represent "get all" ,not only direct
// html() just return children content  not include self 
// not all element has text() method
// first is not the first-children, just first index of result collection
var a=$("div.123").children(".789").next();
//console.log("root:"+$("div[class='123']").html());
console.log(a.length);

 for (let i=0;i<a.length;i++) {
         console.log("tag-name:"+ a[i].tagName);
         console.log("html:"+ $(a[i]).html());
 }

<<<<<<< HEAD
var a =$("body").children("div")   // all div
                .children("a");  // all a
 var text= a.text(); // last a's inner-text
=======
 var text= a.text(); //last a's inner-text
>>>>>>> 3494fe61716d99376be2016b7c6508b15170cb8b

 // $("body").children("div")[1]  => element
 // $("body").children("div").get(1) =>element
 // $($("body").children("div")[1]) =>jq-element-collection
 // $(element) => jq-element
 // '$' can do select ,convert to jq-element-collection
 // $ root => html
 // $(element) => reset root to element
 // select ,childen,  
 // sublings all not left or right
 // parent just 1 element
console.log("inner-text:"+ text);
console.log( "length:"+a.length);


