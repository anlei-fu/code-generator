const { userRole } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userRoleConfig = {
        table: userRole,
        name: "UserRole",
                items: [

                        // add
                        // id excluded 
                        // userAccount : validate --- @NotNull  
                        // systemId : validate --- @NotNull  
                        // createUser : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserRole")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("userAccount","@NotNull")
                                           .validate("systemId","@NotNull")
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
                                .id("deleteUserRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // createUser : excluded 
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateUserRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createUser","createTime"])

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
                                .id("getUserRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                                .id("getUserRoleList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userRole.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userRole.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
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
