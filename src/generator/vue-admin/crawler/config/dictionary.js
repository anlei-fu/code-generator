/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.dictionaryConfig = {
        table: all.dictionary,
        name: "Dictionary",
                items: [
                        // add
                        // id excluded 
                        // type : validate --- @NotNull  
                        // value : validate --- @NotNull  
                        // label : validate --- @NotNull  
                        // createTime excluded 
                        // lastUpdateUser excluded 
                        // lastUpdateTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","lastUpdateUser","lastUpdateTime",])
                                })
                                .request(request => {
                                        request.path("/dictionary")
                                               .description("add dictionary");
                                })
                                .req(req=>{
                                        req.name("createUser")
                                           .type("String")
                                           .from("@SessionAttribute(\"userId\")")
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("type","@NotNull")
                                           .validate("value","@NotNull")
                                           .validate("label","@NotNull")
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
                                        request.path("/dictionary/{id}")
                                               .description("delete single dictionary");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // createUser : excluded 
                        // createTime : excluded 
                        // lastUpdateTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dictionary.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createUser","createTime","lastUpdateTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/dictionary/{id}")
                                               .description("update single dictionary");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req=>{
                                        req.name("lastUpdateUser")
                                           .type("String")
                                           .from("@SessionAttribute(\"userId\")")
                                })                
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("UpdateDictionaryReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.dictionary.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/dictionary/{id}")
                                                .description("get single dictionary");;
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
                        // type : excluded 
                        // value : excluded 
                        // label : excluded 
                        // createUser : excluded 
                        // createTime : expression --- timeRange
                        // lastUpdateUser : excluded 
                        // lastUpdateTime : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.dictionary.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.dictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["type","value","label","createUser","lastUpdateUser","lastUpdateTime",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/dictionary/page")
                                               .description("get dictionary page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetDictionaryPageReq")
                                })
                   
                                .build(),

                        
 ]
}
