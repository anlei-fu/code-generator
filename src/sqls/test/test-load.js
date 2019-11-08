/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 14:17:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 16:31:19
 */
const {SqlTemplateProvider}=require("../template/sql-template-provider");
const {FILE}=require("./../../libs/file");
const {OBJECT}=require("./../../libs/utils");

function test() {
              let provider=new SqlTemplateProvider();
              let id=1;
              provider.load("1.xml");
        
           //   console.log(provider.map.keys());
       //       console.log(provider.map);
            console.log(provider.get("product.0").render({id:1}));

}

/***************************************************Run********************************************** */
test();
