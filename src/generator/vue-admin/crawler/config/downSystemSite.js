/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.downSystemSiteConfig = {
        table: all.downSystemSite,
        name: "DownSystemSite",
                items: [
                        // add
                        // id excluded 
                        // siteId : validate --- @NotNull  
                        // scriptId : validate --- @NotNull  
                        // downSystemId : validate --- @NotNull  
                        // priority : validate --- @NotNull  
                        // crawlerCrawlType : validate --- @NotNull  @Enum("crawlerCrawlType")  
                        // crawlerAutoDownloadPage : validate --- @NotNull  
                        // urlMaxCacheCount : validate --- @NotNull  
                        // bloomLastLoadingTime excluded 
                        // taskTimeout : validate --- @NotNull  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.downSystemSite.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "id",
                                                          "bloomLastLoadingTime",
                                                          "createTime",
                                                          "urlFinishedCount",
	"urlBadCount",
        "urlTotalCount",
        "bloomLastLoadingTime",
        "taskCurrentBindCount",
        "taskCurrentRunningCount",
                                                        ])
                                })
                                .request(request => {
                                        request.path("/downSystemSite")
                                               .description("add downSystemSite");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("siteId","@NotNull")
                                           .validate("scriptId","@NotNull")
                                           .validate("downSystemId","@NotNull")
                                           .validate("priority","@NotNull")
                                           .validate("crawlerCrawlType","@NotNull")
                                           .validate("crawlerCrawlType","@Enum(\"crawlerCrawlType\")")
                                           .validate("crawlerAutoDownloadPage","@NotNull")
                                           .validate("urlMaxCacheCount","@NotNull")
                                           .validate("taskTimeout","@NotNull")
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
                                        request.path("/downSystemSite/{id}")
                                               .description("delete single downSystemSite");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // crawlerCrawlType : validate --- @Enum("crawlerCrawlType")  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.downSystemSite.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes([
                                                          "createTime",
                                                          "urlFinishedCount",
                                                          "urlBadCount",
                                                          "urlTotalCount",
                                                          "bloomLastLoadingTime",
                                                          "taskCurrentBindCount",
                                                          "taskCurrentRunningCount",
                                                        ])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/downSystemSite/{id}")
                                               .description("update single downSystemSite");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("crawlerCrawlType","@Enum(\"crawlerCrawlType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateDownSystemSiteReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.downSystemSite.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/downSystemSite/{id}")
                                                .description("get single downSystemSite");;
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
                        // priority : excluded 
                        // crawlerPageEncoding : excluded 
                        // crawlerPageTimeout : excluded 
                        // crawlerCrawlType : validates --- @Enum("crawlerCrawlType")  
                        // crawlerAutoDownloadPage : excluded 
                        // urlMaxCacheCount : excluded 
                        // urlFinishedCount : excluded 
                        // urlBadCount : excluded 
                        // urlTotalCount : excluded 
                        // urlEncodes : excluded 
                        // urlMaxCrawlCount : excluded 
                        // urlMatchPatterns : excluded 
                        // bloomExpectedUrlSize : excluded 
                        // bloomLastLoadingTime : excluded 
                        // taskUrlBatchCount : excluded 
                        // taskMaxWaitToBindCount : excluded 
                        // taskCurrentBindCount : excluded 
                        // taskMaxRunningCount : excluded 
                        // taskCurrentRunningCount : excluded 
                        // taskTimeout : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.downSystemSite.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.downSystemSite.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "priority",
                                                          "crawlerPageEncoding",
                                                          "crawlerPageTimeout",
                                                          "crawlerAutoDownloadPage",
                                                          "urlMaxCacheCount",
                                                          "urlFinishedCount",
                                                          "urlBadCount",
                                                          "urlTotalCount",
                                                          "urlEncodes",
                                                          "urlMaxCrawlCount",
                                                          "urlMatchPatterns",
                                                          "bloomExpectedUrlSize",
                                                          "bloomLastLoadingTime",
                                                          "taskUrlBatchCount",
                                                          "taskMaxWaitToBindCount",
                                                          "taskCurrentBindCount",
                                                          "taskMaxRunningCount",
                                                          "taskCurrentRunningCount",
                                                          "taskTimeout",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/downSystemSite/page")
                                               .description("get downSystemSite page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("crawlerCrawlType","@Enum(\"crawlerCrawlType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetDownSystemSitePageReq")
                                })
                   
                                .build(),

                        
 ]
}
