/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.scriptConfig = {
        table: all.script,
        name: "Script",
                items: [
                        // add
                        // id excluded 
                        // path : validate --- @NotNull  @Path  
                        // scriptType : validate --- @Enum("scriptType")  
                        // downSiteId : validate --- @NotNull  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.script.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime",])
                                })
                                .request(request => {
                                        request.path("/script")
                                               .description("add script");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("path","@NotNull")
                                           .validate("path","@Path")
                                           .validate("scriptType","@Enum(\"scriptType\")")
                                           .validate("downSiteId","@NotNull")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
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
                                        request.path("/script/{id}")
                                               .description("delete single script");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // path : validate --- @Path  
                        // scriptType : validate --- @Enum("scriptType")  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.script.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/script/{id}")
                                               .description("update single script");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("path","@Path")
                                           .validate("scriptType","@Enum(\"scriptType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateScriptReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.script.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/script/{id}")
                                                .description("get single script");;
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

// getPage
                        // description : excluded 
                        // path : excluded 
                        // scriptType : validates --- @Enum("scriptType")  
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.script.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.script.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description","path",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/script/page")
                                               .description("get script page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("scriptType","@Enum(\"scriptType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetScriptPageReq")
                                })
                   
                                .build(),

                        
 ]
}
