/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:52:53 PM 
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

                              // updateById
                        // createTime : excluded 
                        // id : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.project.columnsArray)
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single project");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .validate("id","@NotNull")
                                           .name("UpdateProjectReq")                                                
                                })
                                .build(),


                        // get detail page
                        // company : excluded 
                        // createTime : excluded 
                        // description : excluded 
                        // name : expression --- like
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.project.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.project.columnsArray)
                                            .excludes("id")
                                                  .excludes(["company","createTime","description",])
                                                  .exp("name","like")
                          })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get project page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetProjectPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("ProjectDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
