/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:59:23 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("D:/project/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.pProjectConfigConfig = {
        table: all.pProjectConfig,
        name: "PProjectConfig",
                items: [
                        // add
                        // content : validate --- @NotEmpty  
                        // createTime excluded 
                        // id excluded 
                        // lastBackupTime excluded 
                        // projectId : validate --- @NotNull  
                        // updateTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.pProjectConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","lastBackupTime","updateTime",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add pProjectConfig");
                                })

                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
                                           .excludes("id")

                                           .validate("content","@NotEmpty")
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
                                               .description("delete single pProjectConfig");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })

                                .build(),

                              // updateById
                        // content : validate --- @NotEmpty  
                        // createTime : excluded 
                        // id : validate --- @NotNull  
                        // lastBackupTime : validate --- @NotNull  
                        // projectId : validate --- @NotNull  
                        // updateTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.pProjectConfig.columnsArray)
                                                  .excludes(["createTime","updateTime",])

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single pProjectConfig");;
                                })
                
                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
                                           .validate("content","@NotEmpty")
                                           .validate("id","@NotNull")
                                           .validate("lastBackupTime","@NotNull")
                                           .validate("projectId","@NotNull")
                                           .name("UpdatePProjectConfigReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.pProjectConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single pProjectConfig");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })

                                .build(),


                        // get detail page
                        // content : excluded 
                        // createTime : excluded 
                        // lastBackupTime : expression --- timeRange
                        // projectId : excluded 
                        // updateTime : expression --- timeRange
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.pProjectConfig.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.pProjectConfig.columnsArray)
                                            .excludes("id")
                                                  .excludes(["content","createTime","projectId",])
                                                  .exp("lastBackupTime","timeRange")
                                                  .exp("updateTime","timeRange")
                          })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get pProjectConfig page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetPProjectConfigPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("PProjectConfigDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
