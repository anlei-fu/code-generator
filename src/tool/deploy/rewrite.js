/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 13:33:33
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 13:55:14
 */
const { FILE } = require("./../libs/file");
const p="main(@);"
var txt=FILE.read("1.txt");
var words=txt.split(" ");
var js=FILE.read("index.js");
var pattern="// run main";
var index=js.indexOf("// run main");
js=js.substr(0,index+1+pattern.length);
var str="[";
for (w of words) {
        if(w.trim()!="")
        str+=`"${w.trim()}",`;
}

if(str.charAt(str.length-1)==",")
    str=str.substr(0,str.length-1);
str+="]";

FILE.write("index.js",js+p.replace("@",str));
FILE.remove("1.txt");
