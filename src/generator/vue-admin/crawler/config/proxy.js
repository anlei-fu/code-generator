/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.proxyConfig = {
        table: all.proxy,
        name: "Proxy",
                items: [
                        // add
                        // id excluded 
                        // ip : validate --- @NotNull  @Ip  
                        // port : validate --- @NotNull  
                        // account : validate --- @NotNull  
                        // password : validate --- @NotNull  @Password  
                        // protocol : validate --- @NotNull  
                        // proxyType : validate --- @Enum("proxyType")  
                        // blockMaxCount : validate --- @NotNull  
                        // blockCurrentCount : validate --- @NotNull  
                        // blockTimeout excluded 
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.proxy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","blockTimeout","createTime","blockCurrentCount","currentUseCount",])
                                })
                                .request(request => {
                                        request.path("/proxy")
                                               .description("add proxy");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("ip","@NotNull")
                                           .validate("ip","@Ip")
                                           .validate("port","@NotNull")
                                           .validate("account","@NotNull")
                                           .validate("password","@NotNull")
                                           .validate("password","@Password")
                                           .validate("protocol","@NotNull")
                                           .validate("proxyType","@Enum(\"proxyType\")")
                                           .validate("blockMaxCount","@NotNull")
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
                                        request.path("/proxy/{id}")
                                               .description("delete single proxy");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // ip : validate --- @Ip  
                        // password : validate --- @Password  
                        // proxyType : validate --- @Enum("proxyType")  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.proxy.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["blockTimeout","createTime","blockCurrentCount","currentUseCount",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/proxy/{id}")
                                               .description("update single proxy");;
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
                                           .validate("password","@Password")
                                           .validate("proxyType","@Enum(\"proxyType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateProxyReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.proxy.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/proxy/{id}")
                                                .description("get single proxy");;
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
                        // ip : excluded 
                        // port : excluded 
                        // account : excluded 
                        // password : excluded 
                        // protocol : excluded 
                        // proxyType : validates --- @Enum("proxyType")  
                        // maxUseCount : excluded 
                        // currentUseCount : excluded 
                        // blockMaxCount : excluded 
                        // blockCurrentCount : excluded 
                        // blockTimeout : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.proxy.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.proxy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["ip","port","account","password","protocol","maxUseCount","currentUseCount","blockMaxCount","blockCurrentCount","blockTimeout",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/proxy/page")
                                               .description("get proxy page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("proxyType","@Enum(\"proxyType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetProxyPageReq")
                                })
                   
                                .build(),

                        
 ]
}
