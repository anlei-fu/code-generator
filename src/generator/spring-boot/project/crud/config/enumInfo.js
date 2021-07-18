/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:08 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("D:/project/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.enumInfoConfig = {
        table: all.enumInfo,
        name: "EnumInfo",
                items: [
                        // add
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.enumInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add enumInfo");
                                })

                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
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
                                               .description("delete single enumInfo");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("String")
                                           .from("@PathVariable");
                                })

                                .build(),

                              // updateById
                        // id : validate --- @NotEmpty
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.enumInfo.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single enumInfo");;
                                })
                
                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
                                           .validate("id","@NotEmpty")
                                           .name("UpdateEnumInfoReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.enumInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single enumInfo");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })

                                .build(),


                        // get detail page
                        // projectId : excluded 
                        // content : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.enumInfo.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.enumInfo.columnsArray)
                                            .excludes("id")
                                                  .excludes(["projectId","content",])
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
                                                .description("get enumInfo page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetEnumInfoPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("EnumInfoDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
