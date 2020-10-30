/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.crawlerConfig = {
        table: all.crawler,
        name: "Crawler",
                items: [
                        // add
                        // id excluded 
                        // clientVersion : validate --- @NotNull  
                        // name : validate --- @NotNull  
                        // ip : validate --- @NotNull  @Ip  
                        // crawlerType : validate --- @Enum("crawlerType")  
                        // uniqueId : validate --- @NotNull  
                        // port : validate --- @NotNull  
                        // heartbeatStatus : validate --- @NotNull  @Enum("heartbeatStatus")  
                        // heartbeatLastTime excluded 
                        // enableStatus : validate --- @NotNull  @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.crawler.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "id",
                                                          "heartbeatLastTime",
                                                          "createTime",
                                                          "heartbeatStatus",
                                                          "currentConcurrency",
                                                          "heartbeatLostCount"
                                                        ])
                                })
                                .request(request => {
                                        request.path("/crawler")
                                               .description("add crawler");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("clientVersion","@NotNull")
                                           .validate("name","@NotNull")
                                           .validate("ip","@NotNull")
                                           .validate("ip","@Ip")
                                           .validate("crawlerType","@Enum(\"crawlerType\")")
                                           .validate("uniqueId","@NotNull")
                                           .validate("port","@NotNull")
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
                                        request.path("/crawler/{id}")
                                               .description("delete single crawler");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // ip : validate --- @Ip  
                        // crawlerType : validate --- @Enum("crawlerType")  
                        // heartbeatStatus : validate --- @Enum("heartbeatStatus")  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.crawler.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes([
                                                          "createTime",
                                                          "heartbeatStatus",
	"heartbeatLastTime",
	"heartbeatLostCount",
                                                ])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/crawler/{id}")
                                               .description("update single crawler");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("ip","@Ip")
                                           .validate("crawlerType","@Enum(\"crawlerType\")")
                                           .validate("heartbeatStatus","@Enum(\"heartbeatStatus\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateCrawlerReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.crawler.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/crawler/{id}")
                                                .description("get single crawler");;
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
                        // clientVersion : excluded 
                        // name : excluded 
                        // ip : excluded 
                        // description : excluded 
                        // crawlerType : validates --- @Enum("crawlerType")  
                        // key : excluded 
                        // port : excluded 
                        // maxConcurrency : excluded 
                        // currentConcurrency : excluded 
                        // heartbeatStatus : validates --- @Enum("heartbeatStatus")  
                        // heartbeatLastTime : excluded 
                        // heartbeatLostCount : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.crawler.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.crawler.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "clientVersion",
                                                          "name","ip",
                                                          "description",
                                                          "key",
                                                          "port",
                                                          "maxConcurrency",
                                                          "currentConcurrency",
                                                          "heartbeatLastTime",
                                                          "heartbeatLostCount",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/crawler/page")
                                               .description("get crawler page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("crawlerType","@Enum(\"crawlerType\")")
                                           .validate("heartbeatStatus","@Enum(\"heartbeatStatus\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetCrawlerPageReq")
                                })
                   
                                .build(),

                        
 ]
}
