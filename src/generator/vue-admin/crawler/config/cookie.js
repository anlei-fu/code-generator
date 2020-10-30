/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.cookieConfig = {
        table: all.cookie,
        name: "Cookie",
                items: [
                        // add
                        // id excluded 
                        // siteId : validate --- @NotNull  
                        // siteAccountId : validate --- @NotNull  
                        // cookie : validate --- @NotNull  
                        // loginIp : validate --- @Ip  
                        // currentUseCount : validate --- @NotNull  
                        // expireTime excluded 
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.cookie.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "id",
                                                          "expireTime",
                                                          "createTime",
                                                          "currentBlockCount",
                                                          "currentUseCount",
                                                        ])
                                })
                                .request(request => {
                                        request.path("/cookie")
                                               .description("add cookie");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("siteId","@NotNull")
                                           .validate("siteAccountId","@NotNull")
                                           .validate("cookie","@NotNull")
                                           .validate("loginIp","@Ip")
                                           .validate("currentUseCount","@NotNull")
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
                                        request.path("/cookie/{id}")
                                               .description("delete single cookie");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // loginIp : validate --- @Ip  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.cookie.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/cookie/{id}")
                                               .description("update single cookie");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("loginIp","@Ip")
                                           .name("UpdateCookieReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.cookie.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/cookie/{id}")
                                                .description("get single cookie");;
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
                        // cookie : excluded 
                        // loginIp : excluded 
                        // currentBlockCount : excluded 
                        // currentUseCount : excluded 
                        // expireTime : excluded 
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.cookie.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.cookie.columnsArray)
                                                  .excludes("id")
                                                  .excludes(
                                                          [
                                                                  "cookie",
                                                                  "loginIp",
                                                                  "currentBlockCount",
                                                                  "currentBlockCount"
                                                                  ,"currentUseCount",
                                                                  "expireTime",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/cookie/page")
                                               .description("get cookie page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetCookiePageReq")
                                })
                   
                                .build(),

                        
 ]
}
