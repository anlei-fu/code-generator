/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:19:37
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 11:47:24
 */
const {resolve}=require("./../model/resolver")
const {FILE} =require("./../../libs/file")
async function  test() {
     let ls= await  resolve({ user: "root", password: "rTo0CesHi2018Qx", host:"192.168.0.36",  database: "contract_sign" },"contract_sign");
     console.log(ls);
     FILE.write("tables.json",JSON.stringify(ls,null,"\t"));
}

test();