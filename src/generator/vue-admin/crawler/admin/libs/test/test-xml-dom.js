/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 14:11:43
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 15:43:39
 */
const {XML_DOM}=require("./../xml-dom");
const {FILE}=require("./../../libs/file");
const {OBJECT}=require("./../../libs/utils");

function test1(){
        let doc =XML_DOM.load(FILE.read("C:/Users/Administrator/Desktop/new/DefectsAdminApi/qx-railway-api/src/main/resources/mapper/infomation/DamageDetailMapper.xml"));

       let mapper= XML_DOM.selectDirect(doc,x=>x.tagName=="mapper");
       console.log(mapper[0]);


       console.log(XML_DOM.getAttr(mapper[0],"namespace"));
}

test1();
