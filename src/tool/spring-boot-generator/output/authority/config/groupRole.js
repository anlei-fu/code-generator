const { groupRole } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.groupRoleConfig = {
        table: groupRole,
        name: "GroupRole",
                items: [

                        // add
                        // id excluded 
                        // userAccount : validate --- @NotNull  
                        // systemId : validate --- @NotNull  
                        // role : validate --- @NotNull  
                        // createUser : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addGroupRole")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/groupRole");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("userAccount","@NotNull")
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
                                .id("deleteGroupRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // createUser : excluded 
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateGroupRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createUser","createTime"])

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
                                .id("getGroupRoleByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                                .id("getGroupRoleList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(groupRole.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(groupRole.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
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
