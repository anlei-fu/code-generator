/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.vcodeConfig = {
        table: all.vcode,
        name: "Vcode",
                items: [
                        // add
                        // id excluded 
                        // accountId : validate --- @NotNull  
                        // vcodeType : validate --- @NotNull  @Enum("vcodeType")  
                        // createTime excluded 
                        // content : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.vcode.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime",])
                                })
                                .request(request => {
                                        request.path("/vcode")
                                               .description("add vcode");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountId","@NotNull")
                                           .validate("vcodeType","@NotNull")
                                           .validate("vcodeType","@Enum(\"vcodeType\")")
                                           .validate("content","@NotNull")
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
                                        request.path("/vcode/{id}")
                                               .description("delete single vcode");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // vcodeType : validate --- @Enum("vcodeType")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.vcode.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/vcode/{id}")
                                               .description("update single vcode");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("vcodeType","@Enum(\"vcodeType\")")
                                           .name("UpdateVcodeReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.vcode.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/vcode/{id}")
                                                .description("get single vcode");;
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
                        // vcodeType : validates --- @Enum("vcodeType")  
                        // createTime : expression --- timeRange
                        // content : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.vcode.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.vcode.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["content",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/vcode/page")
                                               .description("get vcode page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("vcodeType","@Enum(\"vcodeType\")")
                                           .name("GetVcodePageReq")
                                })
                   
                                .build(),

                        
 ]
}
