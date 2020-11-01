/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteConfig = {
        table: all.site,
        name: "Site",
                items: [
                        // add
                        // id excluded 
                        // name : validate --- @NotNull  
                        // domain : validate --- @Url  
                        // homePageUrl : validate --- @NotNull  @Url  
                        // loginCaptaType : validate --- @Enum("loginCaptaType")  
                        // needUseProxy : validate --- @Enum("booleanFlag")  
                        // accountMaxCookieCount : validate --- @NotNull  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.site.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime",])
                                })
                                .request(request => {
                                        request.path("/site")
                                               .description("add site");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("name","@NotNull")
                                           .validate("domain","@Url")
                                           .validate("homePageUrl","@NotNull")
                                           .validate("homePageUrl","@Url")
                                           .validate("loginCaptaType","@Enum(\"loginCaptaType\")")
                                           .validate("needUseProxy","@Enum(\"booleanFlag\")")
                                           .validate("accountMaxCookieCount","@NotNull")
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
                                        request.path("/site/{id}")
                                               .description("delete single site");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // domain : validate --- @Url  
                        // homePageUrl : validate --- @Url  
                        // loginCaptaType : validate --- @Enum("loginCaptaType")  
                        // needUseProxy : validate --- @Enum("booleanFlag")  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.site.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/site/{id}")
                                               .description("update single site");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domain","@Url")
                                           .validate("homePageUrl","@Url")
                                           .validate("loginCaptaType","@Enum(\"loginCaptaType\")")
                                           .validate("needUseProxy","@Enum(\"booleanFlag\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateSiteReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.site.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/site/{id}")
                                                .description("get single site");;
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
                        // name : excluded 
                        // domain : excluded 
                        // description : excluded 
                        // homePageUrl : excluded 
                        // crawlNeedUseCookie : excluded 
                        // loginNeedVcode : excluded 
                        // loginCaptaType : validates --- @Enum("loginCaptaType")  
                        // needUseProxy : validates --- @Enum("booleanFlag")  
                        // ipDelayTimeout : excluded 
                        // ipBlockTimeout : excluded 
                        // ipHourSpeedLimit : excluded 
                        // ipMinuteSpeedLimit : excluded 
                        // ipDaySpeedLimit : excluded 
                        // accountAllowCrossIp : excluded 
                        // accountAllowMultiple : excluded 
                        // accountMinuteSpeedLimit : excluded 
                        // accountHourSpeedLimit : excluded 
                        // accountDaySpeedLimit : excluded 
                        // accountMaxBlockCount : excluded 
                        // accountBlockTimeout : excluded 
                        // accountMaxCookieCount : excluded 
                        // accountDelayTimeout : excluded 
                        // cookieMaxBlockCount : excluded 
                        // cookieExpireTimeout : excluded 
                        // cookieDelayTimeout : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.site.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.site.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","domain","description","homePageUrl","crawlNeedUseCookie","loginNeedVcode","ipDelayTimeout","ipBlockTimeout","ipHourSpeedLimit","ipMinuteSpeedLimit","ipDaySpeedLimit","accountAllowCrossIp","accountAllowMultiple","accountMinuteSpeedLimit","accountHourSpeedLimit","accountDaySpeedLimit","accountMaxBlockCount","accountBlockTimeout","accountMaxCookieCount","accountDelayTimeout","cookieMaxBlockCount","cookieExpireTimeout","cookieDelayTimeout",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/site/page")
                                               .description("get site page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("loginCaptaType","@Enum(\"loginCaptaType\")")
                                           .validate("needUseProxy","@Enum(\"booleanFlag\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetSitePageReq")
                                })
                   
                                .build(),

                        
 ]
}
