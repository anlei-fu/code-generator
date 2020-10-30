/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.urlConfig = {
        table: all.url,
        name: "Url",
                items: [
                        // add
                        // url : validate --- @NotNull  @Url  
                        // depth : validate --- @NotNull  
                        // urlType : validate --- @NotNull  @Enum("urlType")  
                        // referUrl : validate --- @Url  
                        // urlStatus : validate --- @Enum("urlStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.url.columnsArray)
                                                  .excludes("url")
                                                  .excludes(["createTime",])
                                })
                                .request(request => {
                                        request.path("/url")
                                               .description("add url");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("url")
                                           .validate("url","@NotNull")
                                           .validate("url","@Url")
                                           .validate("depth","@NotNull")
                                           .validate("urlType","@NotNull")
                                           .validate("urlType","@Enum(\"urlType\")")
                                           .validate("referUrl","@Url")
                                           .validate("urlStatus","@Enum(\"urlStatus\")")
                                })
                                .build(),

                        // deleteById
                        new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteByUrl")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("url")
                                                  .require("url")
                                })
                                .request(request => {
                                        request.path("/url/{url}")
                                               .description("delete single url");;
                                })
                                .req(req => {
                                        req.name("url")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // url : validate --- @Url  
                        // urlType : validate --- @Enum("urlType")  
                        // referUrl : validate --- @Url  
                        // urlStatus : validate --- @Enum("urlStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateByUrl")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.url.columnsArray)
                                                  .excludes("url")
                                                  .list("url")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("url")
                                                  .require("url")
                                })
                                .request(request => {
                                        request.path("/url/{url}")
                                               .description("update single url");;
                                })
                                .req(req => {
                                        req.name("url")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("url")
                                           .validate("url","@Url")
                                           .validate("urlType","@Enum(\"urlType\")")
                                           .validate("referUrl","@Url")
                                           .validate("urlStatus","@Enum(\"urlStatus\")")
                                           .name("UpdateUrlReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getByUrl")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.url.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("url")
                                                  .require("url")
                                })
                                .request(request => {
                                        request.path("/url/{url}")
                                                .description("get single url");;
                                })
                                .req(req => {
                                        req.name("url")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

// getPage
                        // url : excluded 
                        // depth : excluded 
                        // urlType : validates --- @Enum("urlType")  
                        // referUrl : excluded 
                        // crawlCount : excluded 
                        // urlStatus : validates --- @Enum("urlStatus")  
                        // lastCrawlTime : excluded 
                        // queryString : excluded 
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.url.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.url.columnsArray)
                                                  .excludes("url")
                                                  .excludes(["url","depth","referUrl","crawlCount","lastCrawlTime","queryString",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/url/page")
                                               .description("get url page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("url")
                                           .validate("urlType","@Enum(\"urlType\")")
                                           .validate("urlStatus","@Enum(\"urlStatus\")")
                                           .name("GetUrlPageReq")
                                })
                   
                                .build(),

                        
 ]
}
