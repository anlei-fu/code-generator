/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:27:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("D:/project/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.projectConfigConfig = {
        table: all.projectConfig,
        name: "ProjectConfig",
                items: [
                        // add
                        // id excluded 
                        // updateTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.projectConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","updateTime",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add projectConfig");
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
                                               .description("delete single projectConfig");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })

                                .build(),

                              // updateById
                        // id : validate --- @NotNull  
                        // updateTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.projectConfig.columnsArray)
                                                  .excludes(["updateTime",])

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single projectConfig");;
                                })
                
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .name("UpdateProjectConfigReq")                                                
                                })
                                .build(),


                        // get detail page
                        // content : excluded 
                        // updateTime : expression --- timeRange
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.projectConfig.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.projectConfig.columnsArray)
                                            .excludes("id")
                                                  .excludes(["content",])
                                                  .exp("updateTime","timeRange")
                          })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get projectConfig page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetProjectConfigPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("ProjectConfigDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
