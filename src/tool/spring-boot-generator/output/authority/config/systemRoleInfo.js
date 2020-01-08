const { systemRoleInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemRoleInfoConfig = {
        table: systemRoleInfo,
        name: "SystemRoleInfo",
                items: [

                        // add
                        // id excluded 
                        // systemId : validate --- @NotNull  
                        // role : validate --- @NotNull  
                        // createUser : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addSystemRoleInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/systemRoleInfo");
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
                                .id("deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // createUser : excluded 
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateSystemRoleInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createUser","createTime"])

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
                                .id("getSystemRoleInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // description : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getSystemRoleInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemRoleInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemRoleInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                                  .exp("createTime","timeRange")
                                })
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
