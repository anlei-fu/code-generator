/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:52:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.aditionalOptionConfig = {
        table: all.aditionalOption,
        name: "AditionalOption",
                items: [
                        // add
                        // id excluded 
                        // tableId : validate --- @NotEmpty
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.aditionalOption.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add aditionalOption");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("tableId","@NotEmpty")
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
                                               .description("delete single aditionalOption");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // id : validate --- @NotNull  
                        // tableId : validate --- @NotEmpty
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.aditionalOption.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single aditionalOption");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .validate("tableId","@NotEmpty")
                                           .name("UpdateAditionalOptionReq")                                                
                                })
                                .build(),


                        // get detail page
                        // check : excluded 
                        // description : excluded 
                        // enable : excluded 
                        // name : expression --- like
                        // noticeText : excluded 
                        // tableId : excluded 
                        // title : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.aditionalOption.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.aditionalOption.columnsArray)
                                            .excludes("id")
                                                  .excludes(["check","description","enable","noticeText","tableId","title",])
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
                                                .description("get aditionalOption page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetAditionalOptionPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("AditionalOptionDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
