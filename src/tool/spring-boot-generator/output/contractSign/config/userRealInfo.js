const { userRealInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userRealInfoConfig = {
        table: userRealInfo,
        name: "UserRealInfo",
                items: [

                        // add
                        // userId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserRealInfo")
                                .includes(collection => {
                                        collection.includes(userRealInfo.columnsArray)
                                                  .excludes("userId")

                                })
                                .controller(controller => {
                                        controller.path("/userRealInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("userId")
                                           .validate("userId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserRealInfoByUserId")
                                .conditions(collection => {
                                        collection.includes("userId")
                                                  .require("userId")
                                })
                                .controller(controller => {
                                        controller.path("/userRealInfo/{userId}");
                                })
                                .req(req => {
                                        req.name("userId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateUserRealInfoByUserId")
                                .includes(collection => {
                                        collection.includes(userRealInfo.columnsArray)
                                                  .excludes("userId")

                                })
                                .conditions(collection => {
                                        collection.includes("userId")
                                                  .require("userId")
                                })
                                .controller(controller => {
                                        controller.path("/userRealInfo/{userId}");
                                })
                                .req(req => {
                                        req.name("userId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("userId")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserRealInfoByUserId")
                                .includes(collection=>{
                                        collection.includes(userRealInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("userId")
                                                  .require("userId")
                                })
                                .controller(controller => {
                                        controller.path("/userRealInfo/{userId}");
                                })
                                .req(req => {
                                        req.name("userId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // realName : excluded 
                        // idCardPicFront : excluded 
                        // idCardPicBack : excluded 
                        // idCardPicHand : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userRealInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userRealInfo.columnsArray)
                                                  .excludes("userId")
                                                  .excludes(["realName","idCardPicFront","idCardPicBack","idCardPicHand"])
                                })
                                .id("getUserRealInfoList")
                                .controller(controller => {
                                        controller.path("/userRealInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("userId")

                                })
                                .build()
                ]
}