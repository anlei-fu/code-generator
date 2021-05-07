/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:09 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.validatorConfig = {
        table: all.validator,
        name: "Validator",
                items: [
                        // add
                        // fieldId : validate --- @NotNull  
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.validator.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add validator");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fieldId","@NotNull")
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
                                               .description("delete single validator");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // fieldId : validate --- @NotNull  
                        // id : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.validator.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single validator");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("fieldId","@NotNull")
                                           .validate("id","@NotNull")
                                           .name("UpdateValidatorReq")                                                
                                })
                                .build(),


                        // get detail page
                        // fieldId : excluded 
                        // msg : excluded 
                        // pattern : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.validator.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.validator.columnsArray)
                                            .excludes("id")
                                                  .excludes(["fieldId","msg","pattern",])
                          })
                                .join(join=>{
                                            join.table(all.fieldInfo)
                                                .includes(collection=>{
                                                        collection.includes("name")
                                                                   .alias("name","fieldName")
                                                })
                                                .type("left")
                                                .alias("t1")
                                                .joinCondition(" t.field_id = t1.id")
                                                .build()
                                })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get validator page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetValidatorPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("ValidatorDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
