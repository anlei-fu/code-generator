const { userInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userInfoConfig = {
        table: userInfo,
        name: "UserInfo",
                items: [

                        // add
                        // account excluded 
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // password : validate --- @NotNull  @Password  
                        // userRole : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserInfo")
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
                                           .validate("createUser","@NotNull")
                                           .validate("password","@NotNull")
                                           .validate("password","@Password")
                                           .validate("userRole","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserInfoByAccount")
                                .conditions(collection => {
                                        collection.includes("account")
                                                  .require("account")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{account}");
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
                                .id("updateUserInfoByAccount")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("account")

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
                                .id("getUserInfoByAccount")
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
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("account")
                                                  .excludes(["password"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserInfoList")
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