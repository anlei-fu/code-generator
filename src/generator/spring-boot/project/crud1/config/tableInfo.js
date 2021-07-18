/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:27:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("D:/project/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.tableInfoConfig = {
        table: all.tableInfo,
        name: "TableInfo",
                items: [
                        // add
                        // id excluded 
                        // projectId : validate --- @NotNull  
                        // updateTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.tableInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","updateTime",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add tableInfo");
                                })

                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("projectId","@NotNull")
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
                                               .description("delete single tableInfo");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })

                                .build(),

                              // updateById
                        // id : validate --- @NotNull  
                        // projectId : validate --- @NotNull  
                        // updateTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.tableInfo.columnsArray)
                                                  .excludes(["updateTime",])

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single tableInfo");;
                                })
                
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .validate("projectId","@NotNull")
                                           .name("UpdateTableInfoReq")                                                
                                })
                                .build(),


                        // get detail page
                        // projectId : excluded 
                        // content : excluded 
                        // updateTime : expression --- timeRange
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.tableInfo.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.tableInfo.columnsArray)
                                            .excludes("id")
                                                  .excludes(["projectId","content",])
                                                  .exp("updateTime","timeRange")
                          })
                                .join(join=>{
                                            join.table(all.projectConfig)
                                                .includes(collection=>{
                                                        collection.includes("id")
                                                                   .alias("id","projectConfigId")
                                                })
                                                .type("left")
                                                .alias("t1")
                                                .joinCondition(" t.project_id = t1.id")
                                                .build()
                                })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get tableInfo page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetTableInfoPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("TableInfoDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
