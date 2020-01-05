const { systemRoleGroupInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemRoleGroupInfoConfig = {
        table: systemRoleGroupInfo,
        name: "SystemRoleGroupInfo",
                items: [

                        // add
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // id excluded 
                        // role : validate --- @NotNull  
                        // systemId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSystemRoleGroupInfo")
                                .includes(collection => {
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleGroupInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("createUser","@NotNull")
                                           .validate("role","@NotNull")
                                           .validate("systemId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemRoleGroupInfoById")
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

                        new builder()
                                .type("update")
                                .id("updateSystemRoleGroupInfoById")
                                .includes(collection => {
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")

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
                                .id("getSystemRoleGroupInfoById")
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
                        // createTime : expression --- timeRange
                        // description : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemRoleGroupInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getSystemRoleGroupInfoList")
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