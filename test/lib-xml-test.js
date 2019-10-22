/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-22 13:34:29
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-22 15:21:53
 */

const {XML}= require("./../src/libs/xml");
const {FILE}= require("./../src/libs/file");

 async function testXmlToJson(){
       let text=FILE.read("F:/业务开发项目_研发一/非充系统/qxfc/Web/User Layer/QXFC.UserWeb/Config/UrlMappingConfig.xml");
       let ret=await XML.toJson(text);
      
       FILE.write("1.json",JSON.stringify(ret,null,"\t"));
       FILE.write("1.xml",XML.toXml(ret));
}

function testJsonToXml(){
        console.log(XML.toJson());
}

testXmlToJson();