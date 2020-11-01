/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.systemAlarmConfig = {
        table: all.systemAlarm,
        name: "SystemAlarm",
                items: [
                        // add
                        // id excluded 
                        // siteId : validate --- @NotNull  
                        // msg : validate --- @NotNull  
                        // isReaded : validate --- @Enum("booleanFlag")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.systemAlarm.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime",])
                                })
                                .request(request => {
                                        request.path("/systemAlarm")
                                               .description("add systemAlarm");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("siteId","@NotNull")
                                           .validate("msg","@NotNull")
                                           .validate("isReaded","@Enum(\"booleanFlag\")")
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
                                        request.path("/systemAlarm/{id}")
                                               .description("delete single systemAlarm");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // isReaded : validate --- @Enum("booleanFlag")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.systemAlarm.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/systemAlarm/{id}")
                                               .description("update single systemAlarm");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isReaded","@Enum(\"booleanFlag\")")
                                           .name("UpdateSystemAlarmReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.systemAlarm.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/systemAlarm/{id}")
                                                .description("get single systemAlarm");;
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
                        // msg : excluded 
                        // isReaded : validates --- @Enum("booleanFlag")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.systemAlarm.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.systemAlarm.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["msg",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/systemAlarm/page")
                                               .description("get systemAlarm page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isReaded","@Enum(\"booleanFlag\")")
                                           .name("GetSystemAlarmPageReq")
                                })
                   
                                .build(),

                        
 ]
}
