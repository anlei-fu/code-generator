/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-24 13:54:11
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 14:50:12
 */
var {str}=require("./../libs/str")
var {file}=require("./../libs/file")

function replace(map) {
        let text= file.read("input");
        text=str.replace(text,map);
        file.write("output",text);
        console.log("Completed!");
}

replace({"Handler":"Service","IDBAccess":"Controllers","Data Layer":"Service Layer","Logic":"Srvice"});