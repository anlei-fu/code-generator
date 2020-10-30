/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteAccountConfig = {
        table: all.siteAccount,
        name: "SiteAccount",
                items: [
                        // add
                        // id excluded 
                        // loginType : validate --- @NotNull  @Enum("loginType")  
                        // siteId : validate --- @NotNull  
                        // phone : validate --- @Phone  
                        // email : validate --- @Email  
                        // password : validate --- @Password  
                        // lastLoginTime excluded 
                        // lastLoginIp : validate --- @Ip  
                        // blockCurrentCount : validate --- @NotNull  
                        // blockTimeoutTime excluded 
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.siteAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","lastLoginTime","blockTimeoutTime","createTime","blockCurrentCount","currentUseCount"])
                                })
                                .request(request => {
                                        request.path("/siteAccount")
                                               .description("add siteAccount");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("loginType","@NotNull")
                                           .validate("loginType","@Enum(\"loginType\")")
                                           .validate("siteId","@NotNull")
                                           .validate("phone","@Phone")
                                           .validate("email","@Email")
                                           .validate("password","@Password")
                                           .validate("lastLoginIp","@Ip")
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
                                        request.path("/siteAccount/{id}")
                                               .description("delete single siteAccount");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // loginType : validate --- @Enum("loginType")  
                        // phone : validate --- @Phone  
                        // email : validate --- @Email  
                        // password : validate --- @Password  
                        // lastLoginIp : validate --- @Ip  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.siteAccount.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["id","lastLoginTime","blockTimeoutTime","createTime","blockCurrentCount","currentUseCount"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/siteAccount/{id}")
                                               .description("update single siteAccount");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("loginType","@Enum(\"loginType\")")
                                           .validate("phone","@Phone")
                                           .validate("email","@Email")
                                           .validate("password","@Password")
                                           .validate("lastLoginIp","@Ip")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateSiteAccountReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteAccount.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/siteAccount/{id}")
                                                .description("get single siteAccount");;
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
                        // nickName : excluded 
                        // description : excluded 
                        // loginType : validates --- @Enum("loginType")  
                        // phone : excluded 
                        // email : excluded 
                        // password : excluded 
                        // lastLoginTime : excluded 
                        // lastLoginIp : excluded 
                        // currentUseCount : excluded 
                        // blockCurrentCount : excluded 
                        // blockTimeoutTime : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteAccount.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.siteAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["nickName","description","phone","email","password","lastLoginTime","lastLoginIp","currentUseCount","blockCurrentCount","blockTimeoutTime",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/siteAccount/page")
                                               .description("get siteAccount page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("loginType","@Enum(\"loginType\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetSiteAccountPageReq")
                                })
                   
                                .build(),

                        
 ]
}
