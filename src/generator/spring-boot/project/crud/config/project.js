/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:17 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.projectConfig = {
        table: all.project,
        name: "Project",
                items: [
                        // add
                        // createTime excluded 
                        // id excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.project.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add project");
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
                                               .description("delete single project");;
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
                                               .description("bacth delete project");;
                                })
                                .req(req => {
                                        req.name("ids")
                                           .type("Integer")
                                           .list();
                                })
                                .build(),

// updateById
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.project.columnsArray)
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single project");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("UpdateProjectReq")                                                
                                })
                                .build(),

// updateBatch
                                                        // createTime : excluded
                                new ConfigItemBuilder()
                                .type("update")
                                .id("updateBatch")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.project.columnsArray)
                                .excludes("id")
                                                  .excludes(["createTime",])

                                 })
                                 .conditions(collection => {
                                        collection.includes("id")
                                        .require("id")
                                        .list("id");
                                })
                                .request(request => {
                                        request.path("update-batch")
                                               .description("update project batch");;
                                 })
                                .req(req => {
                                        req.doCreate()

                                .name("UpdateProjectBatchReq")                                                
                                 })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.project.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single project");;
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
                        // createTime : expression --- timeRange
                        // id : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.project.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.project.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/page")
                                               .description("get project page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetProjectPageReq")
                                })
                   
                                .build(),

                        
 ]
}
