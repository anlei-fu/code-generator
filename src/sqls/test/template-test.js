/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 11:02:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 15:47:22
 */
const{FILE}=require("./../../libs/file")
const{parse}=require("./../template/sqltemplate-parser")

function test(params) {
     let temp= parse("select *from user where id=${id};");

     temp.segments.forEach(x=>{
      console.log(x);
     });
}

/// run 
test();