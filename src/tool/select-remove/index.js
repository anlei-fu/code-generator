/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 11:22:08
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 11:33:03
 */

var { STR } = require("./../../libs/str")
var { FILE } = require("./../../libs/file")

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
        patterns = STR.select1(text,"$(",")");
        
        patterns.forEach(p=>{
                text=text.replace(p,"");
        })
       
        FILE.write(output, text);
        console.log("Completed!");
}

// do work
replace({ tr: "th", td: "th" });