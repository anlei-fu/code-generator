/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.proxyBlockAnalyzeConfig = {
        table: all.proxyBlockAnalyze,
        name: "ProxyBlockAnalyze",
                items: [
                        // add
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.proxyBlockAnalyze.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("/proxyBlockAnalyze")
                                               .description("add proxyBlockAnalyze");
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
                                        request.path("/proxyBlockAnalyze/{id}")
                                               .description("delete single proxyBlockAnalyze");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.proxyBlockAnalyze.columnsArray)
                                                  .excludes("id")
                                                  .list("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/proxyBlockAnalyze/{id}")
                                               .description("update single proxyBlockAnalyze");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("UpdateProxyBlockAnalyzeReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.proxyBlockAnalyze.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/proxyBlockAnalyze/{id}")
                                                .description("get single proxyBlockAnalyze");;
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
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.proxyBlockAnalyze.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.proxyBlockAnalyze.columnsArray)
                                                  .excludes("id")

                                })
                                .request(request => {
                                        request.path("/proxyBlockAnalyze/page")
                                               .description("get proxyBlockAnalyze page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetProxyBlockAnalyzePageReq")
                                })
                   
                                .build(),

                        
 ]
}
