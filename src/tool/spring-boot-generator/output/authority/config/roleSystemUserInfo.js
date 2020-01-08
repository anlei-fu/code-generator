const { roleSystemUserInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.roleSystemUserInfoConfig = {
        table: roleSystemUserInfo,
        name: "RoleSystemUserInfo",
                items: [

                        // add
                        // account excluded 
                        // password : validate --- @NotNull  @Password  
                        // createTime excluded 
                        // role : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addRoleSystemUserInfo")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/roleSystemUserInfo/{account}");
                                })
                                .req(req => {
                                        req.name("account")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // password : validate --- @Password  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["createTime"])

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
                                           .type("String")
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
                                .id("getRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
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
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // password : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getRoleSystemUserInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(roleSystemUserInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["password"])
                                                  .exp("createTime","timeRange")
                                })
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
