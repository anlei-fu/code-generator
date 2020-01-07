const { userInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userInfoConfig = {
        table: userInfo,
        name: "UserInfo",
                items: [

                        // add
                        // id excluded 
                        // phoneNo : validate --- @Phone  
                        // email : validate --- @Email  
                        // password : validate --- @Password  
                        // lastLoginIp : validate --- @Ip
                        new builder()
                                .type("insert")
                                .id("addUserInfo")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("phoneNo","@Phone")
                                           .validate("email","@Email")
                                           .validate("password","@Password")
                                           .validate("lastLoginIp","@Ip")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // phoneNo : validate --- @Phone  
                        // email : validate --- @Email  
                        // password : validate --- @Password  
                        // lastLoginIp : validate --- @Ip
                        new builder()
                                .type("update")
                                .id("updateUserInfoById")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("phoneNo","@Phone")
                                           .validate("email","@Email")
                                           .validate("password","@Password")
                                           .validate("lastLoginIp","@Ip")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserInfoById")
                                .includes(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userInfo/{id}");
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
                        // phoneNo : validates --- @Phone  
                        // email : validates --- @Email  
                        // password : excluded 
                        // lastLoginIp : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["password","lastLoginIp"])
                                })
                                .id("getUserInfoList")
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("phoneNo","@Phone")
                                           .validate("email","@Email")
                                })
                                .build()
                ]
}