const { userInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userInfoConfig = {
        table: userInfo,
        name: "UserInfo",
                items: [

                        // add
                        // id : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserInfo")
                                .includes(collection => {
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
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
                        // email : validate --- @Email  
                        // lastLoginIp : validate --- @Ip  
                        // password : validate --- @Password  
                        // phoneNo : validate --- @Phone
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
                                           .validate("email","@Email")
                                           .validate("lastLoginIp","@Ip")
                                           .validate("password","@Password")
                                           .validate("phoneNo","@Phone")
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
                        // email : validates --- @Email  
                        // lastLoginIp : excluded 
                        // password : excluded 
                        // phoneNo : validates --- @Phone
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["lastLoginIp","password"])
                                })
                                .id("getUserInfoList")
                                .controller(controller => {
                                        controller.path("/userInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("email","@Email")
                                           .validate("phoneNo","@Phone")
                                })
                                .build()
                ]
}