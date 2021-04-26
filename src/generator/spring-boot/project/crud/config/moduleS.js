/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:09 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.moduleSConfig = {
        table: all.moduleS,
        name: "ModuleS",
                items: [
                        // add
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.moduleS.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add moduleS");
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
                                        request.path("{id}")
                                               .description("delete single moduleS");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // id : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.moduleS.columnsArray)

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single moduleS");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .name("UpdateModuleSReq")                                                
                                })
                                .build(),


                        // get detail page
                        // description : excluded 
                        // name : expression --- like
                        // parentMouduleId : excluded 
                        // projectId : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.moduleS.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.moduleS.columnsArray)
                                            .excludes("id")
                                                  .excludes(["description","parentMouduleId","projectId",])
                                                  .exp("name","like")
                          })
                                .join(join=>{
                                            join.table(all.project)
                                                .includes(collection=>{
                                                        collection.includes("name")
                                                                   .alias("name","projectName")
                                                })
                                                .type("left")
                                                .alias("t1")
                                                .joinCondition(" t.project_id = t1.id")
                                                .build()
                                })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get moduleS page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetModuleSPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("ModuleSDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
