const { userAccountInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userAccountInfoConfig = {
        table: userAccountInfo,
        name: "UserAccountInfo",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserAccountInfo")
                                .includes(collection => {
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo");
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
                                .id("deleteUserAccountInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // accountType : validate --- @Enum(accountType)  
                        // loginPwd : validate --- @Password  
                        // verifyState : validate --- @Enum(verifyState)  
                        // alipayMpid : validate --- @Ip  
                        // lastLoginIp : validate --- @Ip
                        new builder()
                                .type("update")
                                .id("updateUserAccountInfoById")
                                .includes(collection => {
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(accountType)")
                                           .validate("loginPwd","@Password")
                                           .validate("verifyState","@Enum(verifyState)")
                                           .validate("alipayMpid","@Ip")
                                           .validate("lastLoginIp","@Ip")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserAccountInfoById")
                                .includes(collection=>{
                                        collection.includes(userAccountInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo/{id}");
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
                        // accountType : validates --- @Enum(accountType)  
                        // userName : excluded 
                        // loginPwd : excluded 
                        // verifyState : validates --- @Enum(verifyState)  
                        // alipayMpid : validates --- @Ip  
                        // lastLoginIp : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userAccountInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["userName","loginPwd","lastLoginIp"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserAccountInfoList")
                                .controller(controller => {
                                        controller.path("/userAccountInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(accountType)")
                                           .validate("verifyState","@Enum(verifyState)")
                                           .validate("alipayMpid","@Ip")
                                })
                                .build()
                ]
}