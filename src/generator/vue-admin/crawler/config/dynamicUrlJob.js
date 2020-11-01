/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.dynamicUrlJobConfig = {
        table: all.dynamicUrlJob,
        name: "DynamicUrlJob",
                items: [
                        // add
                        // id excluded 
                        // dynamicType : validate --- @Enum("dynamicType")  
                        // createTime excluded 
                        // enableStatus : validate --- @NotNull  @Enum("enableStatus")  
                        // delayTimeout : validate --- @NotNull  
                        // lastRunTime excluded 
                        // concurrency : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dynamicUrlJob.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","lastRunTime",])
                                })
                                .request(request => {
                                        request.path("/dynamicUrlJob")
                                               .description("add dynamicUrlJob");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dynamicType","@Enum(\"dynamicType\")")
                                           .validate("enableStatus","@NotNull")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .validate("delayTimeout","@NotNull")
                                           .validate("concurrency","@NotNull")
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
                                        request.path("/dynamicUrlJob/{id}")
                                               .description("delete single dynamicUrlJob");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // dynamicType : validate --- @Enum("dynamicType")  
                        // createTime : excluded 
                        // enableStatus : validate --- @Enum("enableStatus")
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dynamicUrlJob.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/dynamicUrlJob/{id}")
                                               .description("update single dynamicUrlJob");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dynamicType","@Enum(\"dynamicType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateDynamicUrlJobReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.dynamicUrlJob.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/dynamicUrlJob/{id}")
                                                .description("get single dynamicUrlJob");;
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
                        // dynamicType : validates --- @Enum("dynamicType")  
                        // createTime : expression --- timeRange
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // delayTimeout : excluded 
                        // lastRunTime : excluded 
                        // concurrency : excluded 
                        // maxWaintToBindTaskCount : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.dynamicUrlJob.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.dynamicUrlJob.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["delayTimeout","lastRunTime","concurrency","maxWaintToBindTaskCount",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/dynamicUrlJob/page")
                                               .description("get dynamicUrlJob page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dynamicType","@Enum(\"dynamicType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetDynamicUrlJobPageReq")
                                })
                   
                                .build(),

                        
 ]
}
