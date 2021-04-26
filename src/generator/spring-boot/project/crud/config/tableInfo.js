/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:09 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.tableInfoConfig = {
        table: all.tableInfo,
        name: "TableInfo",
                items: [
                        // add
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.tableInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add tableInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

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
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.tableInfo.columnsArray)

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
                                           .name("UpdateTableInfoReq")                                                
                                })
                                .build(),


                        // get detail page
                        // apiPrefix : excluded 
                        // batchDelete : excluded 
                        // batchEidit : excluded 
                        // deletable : excluded 
                        // description : excluded 
                        // eiditable : excluded 
                        // insertable : excluded 
                        // mouduleId : excluded 
                        // name : expression --- like
                        // projectId : excluded 
                        // rawName : excluded 
                        // title : excluded
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
                                                  .excludes(["apiPrefix","batchDelete","batchEidit","deletable","description","eiditable","insertable","mouduleId","projectId","rawName","title",])
                                                  .exp("name","like")
                          })
                                .join(join=>{
                                            join.table(all.project)
                                                .includes(collection=>{
                                                        collection.includes("name")
                                                                   .alias("name","projectName")
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
