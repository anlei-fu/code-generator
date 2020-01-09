const { userAccountInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userAccountInfoConfig = {
        table: userAccountInfo,
        name: "UserAccountInfo",
                items: [

                        // add
                        // accountType : validate --- @Enum("accountType")  
                        // createTime excluded 
                        // id excluded 
                        // lastLoginIp : validate --- @Ip  
                        // loginPwd : validate --- @Password  
                        // verifyState : validate --- @Enum("verifyState")
                        new builder()
                                .type("insert")
                                .id("addUserAccountInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("lastLoginIp","@Ip")
                                           .validate("loginPwd","@Password")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserAccountInfoById")
                                .alias("t")
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
                        // accountType : validate --- @Enum("accountType")  
                        // createTime : excluded 
                        // lastLoginIp : validate --- @Ip  
                        // loginPwd : validate --- @Password  
                        // verifyState : validate --- @Enum("verifyState")
                        new builder()
                                .type("update")
                                .id("updateUserAccountInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("lastLoginIp","@Ip")
                                           .validate("loginPwd","@Password")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserAccountInfoById")
                                .alias("t")
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
                        // accountType : validates --- @Enum("accountType")  
                        // createTime : expression --- timeRange
                        // lastLoginIp : excluded 
                        // loginPwd : excluded 
                        // userName : excluded 
                        // verifyState : validates --- @Enum("verifyState")
                        new builder()
                                .type("select")
                                .id("getUserAccountInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userAccountInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userAccountInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["lastLoginIp","loginPwd","userName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userAccountInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })

                                .build()
                ]
}
