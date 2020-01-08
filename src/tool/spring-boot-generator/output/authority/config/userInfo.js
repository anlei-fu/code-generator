const { userInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userInfoConfig = {
        table: userInfo,
        name: "UserInfo",
                items: [

                        // add
                        // account excluded 
                        // password : validate --- @NotNull  @Password  
                        // createTime excluded 
                        // createUser : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["account","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("account")
                                           .validate("password","@NotNull")
                                           .validate("password","@Password")
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
                                .id("deleteUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{account}");
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
                        // createUser : excluded
                        new builder()
                                .type("update")
                                .id("updateUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["createTime","createUser"])

                                })
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{account}");
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
                                .id("getUserInfoByUserAndUserAndUserAndUserAndAccount")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{account}");
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
                                .id("getUserInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["password"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("account")

                                })

                                .build()
                ]
}
