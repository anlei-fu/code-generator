/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteAnalyzeConfig = {
        table: all.siteAnalyze,
        name: "SiteAnalyze",
                items: [
                        // add
                        // id excluded 
                        // siteId : validate --- @NotNull  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.siteAnalyze.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime",])
                                })
                                .request(request => {
                                        request.path("/siteAnalyze")
                                               .description("add siteAnalyze");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("siteId","@NotNull")
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
                                        request.path("/siteAnalyze/{id}")
                                               .description("delete single siteAnalyze");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.siteAnalyze.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/siteAnalyze/{id}")
                                               .description("update single siteAnalyze");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("UpdateSiteAnalyzeReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteAnalyze.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/siteAnalyze/{id}")
                                                .description("get single siteAnalyze");;
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
                        // totalCount : excluded 
                        // successCount : excluded 
                        // successAverageSpeed : excluded 
                        // averageSpeed : excluded 
                        // blockIpCount : excluded 
                        // blockAccountCount : excluded 
                        // successMean : excluded 
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteAnalyze.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.siteAnalyze.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["totalCount","successCount","successAverageSpeed","averageSpeed","blockIpCount","blockAccountCount","successMean",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/siteAnalyze/page")
                                               .description("get siteAnalyze page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetSiteAnalyzePageReq")
                                })
                   
                                .build(),

                        
 ]
}
