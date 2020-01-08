const { systemRoleGroupInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemRoleGroupInfoConfig = {
        table: systemRoleGroupInfo,
        name: "SystemRoleGroupInfo",
                items: [

                        // add
                        // id excluded 
                        // systemId : validate --- @NotNull  
                        // role : validate --- @NotNull  
                        // createUser : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addSystemRoleGroupInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("systemId","@NotNull")
                                           .validate("role","@NotNull")
                                           .validate("createUser","@NotNull")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo/{id}");
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
                        new builder()
                                .type("update")
                                .id("updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createUser","createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo/{id}");
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

                        // getList
                        // description : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getSystemRoleGroupInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })

                                .build()
                ]
}
