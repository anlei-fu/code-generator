/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:59:23 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("D:/project/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.pMenuConfig = {
        table: all.pMenu,
        name: "PMenu",
                items: [
                        // add
                        // createTime excluded 
                        // description : validate --- @NotEmpty  
                        // id excluded 
                        // lastBackupTime excluded 
                        // menuLevel : validate --- @NotNull  
                        // name : validate --- @NotEmpty  
                        // parentId : validate --- @NotNull  
                        // projectId : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.pMenu.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","lastBackupTime",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add pMenu");
                                })

                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
                                           .excludes("id")

                                           .validate("description","@NotEmpty")
                                           .validate("menuLevel","@NotNull")
                                           .validate("name","@NotEmpty")
                                           .validate("parentId","@NotNull")
                                           .validate("projectId","@NotNull")
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
                                               .description("delete single pMenu");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })

                                .build(),

                              // updateById
                        // createTime : excluded 
                        // description : validate --- @NotEmpty  
                        // id : validate --- @NotNull  
                        // lastBackupTime : validate --- @NotNull  
                        // menuLevel : validate --- @NotNull  
                        // name : validate --- @NotEmpty  
                        // parentId : validate --- @NotNull  
                        // projectId : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.pMenu.columnsArray)
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single pMenu");;
                                })
                
                                .req(req => {
                                        req.doCreate()
                                           .from("@RequestBody")
                                           .validate("description","@NotEmpty")
                                           .validate("id","@NotNull")
                                           .validate("lastBackupTime","@NotNull")
                                           .validate("menuLevel","@NotNull")
                                           .validate("name","@NotEmpty")
                                           .validate("parentId","@NotNull")
                                           .validate("projectId","@NotNull")
                                           .name("UpdatePMenuReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.pMenu.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single pMenu");;
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


                        // get detail page
                        // createTime : excluded 
                        // description : excluded 
                        // lastBackupTime : expression --- timeRange
                        // menuLevel : excluded 
                        // name : expression --- like
                        // parentId : excluded 
                        // projectId : excluded
                         new ConfigItemBuilder()
                         .type("select")
                         .id("getDetailPage")
                         .alias("t")
                         .includes(collection=>{
                                 collection.includes(all.pMenu.columnsArray)
                         })
                         .conditions(collection=>{
                                  collection.includes(all.pMenu.columnsArray)
                                            .excludes("id")
                                                  .excludes(["createTime","description","menuLevel","parentId","projectId",])
                                                  .exp("lastBackupTime","timeRange")
                                                  .exp("name","like")
                          })
                                .join(join=>{
                                            join.table(all.pProjectConfig)
                                                .includes(collection=>{
                                                        collection.includes("projectId")
                                                                   .alias("projectId","pProjectConfigProjectId")
                                                })
                                                .type("left")
                                                .alias("t1")
                                                .joinCondition(" t.project_id = t1.id")
                                                .build()
                                })
                                
                         .request(request => {
                                         request.path("detail/page")
                                                .description("get pMenu page with additional details");;
                        })
                         .req(req => {
                                  req.doCreate()
                                 .excludes("id")

                                 .name("GetPMenuPageReq")
                         })
                   
                         .resp(resp=>{
                                 resp.doCreate()
                                     .name("PMenuDetailResp")
                                     .build()
                         })
                         .build(),

                        
 ]
}
