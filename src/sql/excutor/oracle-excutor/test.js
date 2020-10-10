/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 17:05:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 17:08:51
 */
const {OracleExcutor}=require("./oracle-excutor")

function test(){
        let excutor=new OracleExcutor("192.168.5.210/orcl","qxfc","123456");
        excutor.query("ssss");
}

test();