/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:09 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.fieldInfoConfig = {
        table: all.fieldInfo,
        name: "FieldInfo",
                items: [
                        // add
                        // id excluded 
                        // tableId : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.fieldInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add fieldInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("tableId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                               .description("delete single fieldInfo");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // id : validate --- @NotNull  
                        // tableId : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.fieldInfo.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single fieldInfo");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .validate("tableId","@NotNull")
                                           .name("UpdateFieldInfoReq")                                                
                                })
                                .build(),


                        // get detail page
                        // batchEditable : excluded 
                        // defaultShow : excluded 
                        // description : excluded 
                        // editable : excluded 
                        // filterType : excluded 
                        // formatPattern : excluded 
                        // formatType : excluded 
                        // insertNullable : excluded 
                        // insertable : excluded 
                        // javaType : excluded 
                        // name : expression --- like
                        // noticeText : excluded 
                        // order : excluded 
                        // rawName : excluded 
                        // realColumn : excluded 
                        // tableId : excluded 
                        // title : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.fieldInfo.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.fieldInfo.columnsArray)
                                            .excludes("id")
                                                  .excludes(["batchEditable","defaultShow","description","editable","filterType","formatPattern","formatType","insertNullable","insertable","javaType","noticeText","order","rawName","realColumn","tableId","title",])
                                                  .exp("name","like")
                          })
                                .join(join=>{
                                            join.table(all.tableInfo)
                                                .includes(collection=>{
                                                        collection.includes("name")
                                                                   .alias("name","tableName")
                                                })
                                                .type("left")
                                                .alias("t1")
                                                .joinCondition(" t.table_id = t1.id")
                                                .build()
                                })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get fieldInfo page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetFieldInfoPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("FieldInfoDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
