/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 11:46:28
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 16:48:44
 */
const { MysqlExcutor } = require("../mysql-excutor/mysql-excutor");
const { FILE } = require("../../libs/file");
const{damageRepository}=require("../model/damageRepository")

let excutor = new MysqlExcutor({ user: "root", password: "2011801243", host:"127.0.0.1",  database: "test" });

async function testQuery() {
        let data = await excutor.query("select * from INFORMATION_SCHEMA.Columns where table_name ='damage_repository'");
       FILE.write("1.json",JSON.stringify(data));
} 

async function testExcute(){
        let sql="delete from damage_repository where order_detail_id=20191030";
        let data =await excutor.excute(sql);
        console.log(data);
}
let data=  damageRepository.create();
console.log(data);

let t=1;

if(t)
  console.log(true);

testQuery();
testExcute();
