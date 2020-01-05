const { systemRoleInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemRoleInfoConfig = {
        table: systemRoleInfo,
        name: "SystemRoleInfo",
                items: [

                        // add
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // id excluded 
                        // role : validate --- @NotNull  
                        // systemId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSystemRoleInfo")
                                .includes(collection => {
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleInfo");
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
                                .id("deleteSystemRoleInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleInfo/{id}");
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
                                .id("updateSystemRoleInfoById")
                                .includes(collection => {
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleInfo/{id}");
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
                                .id("getSystemRoleInfoById")
                                .includes(collection=>{
                                        collection.includes(systemRoleInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleInfo/{id}");
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
                                        collection.includes(systemRoleInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getSystemRoleInfoList")
                                .controller(controller => {
                                        controller.path("/systemRoleInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}