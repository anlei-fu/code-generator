/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:17 PM 
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
                        // level : validate --- @Enum("Level")
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
                                           .validate("level","@Enum(\"Level\")")
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

                                                              // delete batch
                                new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteBatch")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                                  .list("id")
                                })
                                .request(request => {
                                        request.path("delete-batch")
                                               .description("bacth delete moduleS");;
                                })
                                .req(req => {
                                        req.name("ids")
                                           .type("Integer")
                                           .list();
                                })
                                .build(),

// updateById
                        // level : validate --- @Enum("Level")
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.moduleS.columnsArray)
                                                  .list("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single moduleS");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(\"Level\")")
                                           .name("UpdateModuleSReq")                                                
                                })
                                .build(),

// updateBatch
                                                        // level : validate --- @Enum("Level")
                                new ConfigItemBuilder()
                                .type("update")
                                .id("updateBatch")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.moduleS.columnsArray)
                                .excludes("id")

                                 })
                                 .conditions(collection => {
                                        collection.includes("id")
                                        .require("id")
                                        .list("id");
                                })
                                .request(request => {
                                        request.path("update-batch")
                                               .description("update moduleS batch");;
                                 })
                                .req(req => {
                                        req.doCreate()
                                           .validate("level","@Enum(\"Level\")")
                                .name("UpdateModuleSBatchReq")                                                
                                 })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.moduleS.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single moduleS");;
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
                        // id : excluded 
                        // level : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.moduleS.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.moduleS.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","level",])
                                })
                                .request(request => {
                                        request.path("/page")
                                               .description("get moduleS page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetModuleSPageReq")
                                })
                   
                                .build(),

                        
 ]
}
