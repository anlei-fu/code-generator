/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-02 10:21:21
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-04 14:43:47
 */

const {FILE}=require("./../../libs/file")
const {STR}=require("./../../libs/str")
const {ARRAY}=require("./../../libs/utils")

function make(){

    let ls =[];

    FILE.readLines("flags.csv").forEach(x=>{
       ls.push(x.trim().split(","));
    });

     let output="";
     let func="";

     ARRAY.groupBy(ls,x=>x[2]).forEach((value,key)=>{
         let item=FILE.read("template.java").replace(/@name/g,key) 
         .replace("@description",value[0][1]);
         let temp="";
         let annotation=FILE.read("annotation.java").replace(/@name/g,STR.upperFirstLetter(key));
         FILE.write(`output/annotation/${STR.upperFirstLetter(key)}Validate.java`,annotation);
         let validator=FILE.read("validator.java").replace(/@name/g,STR.upperFirstLetter(key));
         FILE.write(`output/validator/${STR.upperFirstLetter(key)}Validator.java`,validator);


         func+=FILE.read("function.java").replace(/@name0/g,value[0][2])
                                         .replace(/@name1/g,STR.upperFirstLetter(value[0][2]));

         value.forEach(y=>{
                 temp+=`${key}.put(${y[4]},"${y[3]}");\r\n`;
         })

         output+=item.replace("@items",temp.trim());

     });

     console.log(func);
     FILE.write("output/output.java",FILE.read("header.java") +output+func+FILE.read("tail.java"));

}

// main
make();