const { roleSystemUserInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.roleSystemUserInfoConfig = {
        table: roleSystemUserInfo,
        name: "RoleSystemUserInfo",
                items: [

                        // add
                        // account excluded 
                        // createTime excluded 
                        // password : validate --- @NotNull  @Password  
                        // role : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addRoleSystemUserInfo")
                                .includes(collection => {
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["account","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("account")
                                           .validate("password","@NotNull")
                                           .validate("password","@Password")
                                           .validate("role","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteRoleSystemUserInfoByAccount")
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo/{account}");
                                })
                                .req(req => {
                                        req.name("account")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // password : validate --- @Password
                        new builder()
                                .type("update")
                                .id("updateRoleSystemUserInfoByAccount")
                                .includes(collection => {
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                                  .excludes("account")

                                })
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo/{account}");
                                })
                                .req(req => {
                                        req.name("account")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("account")
                                           .validate("password","@Password")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getRoleSystemUserInfoByAccount")
                                .includes(collection=>{
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo/{account}");
                                })
                                .req(req => {
                                        req.name("account")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // createTime : expression --- timeRange
                        // password : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["password"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getRoleSystemUserInfoList")
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("account")

                                })
                                .build()
                ]
}