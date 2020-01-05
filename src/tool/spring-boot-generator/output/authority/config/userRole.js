const { userRole } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userRoleConfig = {
        table: userRole,
        name: "UserRole",
                items: [

                        // add
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // id excluded 
                        // systemId : validate --- @NotNull  
                        // userAccount : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserRole")
                                .includes(collection => {
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("createUser","@NotNull")
                                           .validate("systemId","@NotNull")
                                           .validate("userAccount","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserRoleById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userRole/{id}");
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
                                .id("updateUserRoleById")
                                .includes(collection => {
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userRole/{id}");
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
                                .id("getUserRoleById")
                                .includes(collection=>{
                                        collection.includes(userRole.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userRole/{id}");
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
                                        collection.includes(userRole.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserRoleList")
                                .controller(controller => {
                                        controller.path("/userRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}