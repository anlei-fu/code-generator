/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-02 14:23:09
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-02 16:44:47
 */
const {COMPONENTS}=require("./../componets")
const {FILE}=require("./../../../libs/file")

function generate(){
      let table= JSON.parse(FILE.read("table.json"));
      let result=  COMPONENTS.renderExportExcel(table,{columns:["Status","Phone"],orderBy:""});

      FILE.write("./outputs/controller.cs",result.controller);
      FILE.write("./outputs/export.js",result.js);
      FILE.write("./outputs/service.cs",result.service);
      FILE.write("./outputs/html.cshtml",result.html);
      FILE.write("./outputs/config.xml",result.config);
}

/*****************************************main*****************************************/
generate();