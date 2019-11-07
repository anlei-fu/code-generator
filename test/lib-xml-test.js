/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-22 13:34:29
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 10:22:02
 */

const {XML}= require("./../src/libs/xml");
const {FILE}= require("./../src/libs/file");

 async function testXmlToJson(){
       let text=FILE.read("C:/Users/Administrator/Desktop/new/DefectsAdminApi/qx-railway-api/src/main/resources/mapper/infomation/SummaryMapper.xml");
       let ret=await XML.toJson(text);
      
       FILE.write("1.json",JSON.stringify(ret,null,"\t"));
       FILE.write("1.xml",XML.toXml(ret));
}

function testJsonToXml(){
        console.log(XML.toJson());
}

testXmlToJson();