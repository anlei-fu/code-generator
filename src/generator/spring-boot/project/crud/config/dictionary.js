/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:09 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.dictionaryConfig = {
        table: all.dictionary,
        name: "Dictionary",
                items: [
                        // add
                        // id excluded 
                        // type : validate --- @NotEmpty  
                        // value : validate --- @NotEmpty
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add dictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("type","@NotEmpty")
                                           .validate("value","@NotEmpty")
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
                                        request.path("{id}")
                                               .description("delete single dictionary");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // id : validate --- @NotNull  
                        // type : validate --- @NotEmpty  
                        // value : validate --- @NotEmpty
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.dictionary.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single dictionary");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .validate("type","@NotEmpty")
                                           .validate("value","@NotEmpty")
                                           .name("UpdateDictionaryReq")                                                
                                })
                                .build(),


                        // get detail page
                        // name : expression --- like
                        // value : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.dictionary.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.dictionary.columnsArray)
                                            .excludes("id")
                                                  .excludes(["value",])
                                                  .exp("name","like")
                          })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get dictionary page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetDictionaryPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("DictionaryDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
