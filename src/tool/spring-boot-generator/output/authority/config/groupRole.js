const { groupRole } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.groupRoleConfig = {
        table: groupRole,
        name: "GroupRole",
                items: [

                        // add
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // id excluded 
                        // role : validate --- @NotNull  
                        // systemId : validate --- @NotNull  
                        // userAccount : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addGroupRole")
                                .includes(collection => {
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/groupRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("createUser","@NotNull")
                                           .validate("role","@NotNull")
                                           .validate("systemId","@NotNull")
                                           .validate("userAccount","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteGroupRoleById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/groupRole/{id}");
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
                                .id("updateGroupRoleById")
                                .includes(collection => {
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/groupRole/{id}");
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
                                .id("getGroupRoleById")
                                .includes(collection=>{
                                        collection.includes(groupRole.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/groupRole/{id}");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(groupRole.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")
                                })
                                .id("getGroupRoleList")
                                .controller(controller => {
                                        controller.path("/groupRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}