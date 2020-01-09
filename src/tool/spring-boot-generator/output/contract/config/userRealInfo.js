const { userRealInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userRealInfoConfig = {
        table: userRealInfo,
        name: "UserRealInfo",
                items: [

                        // add
                        // userId excluded
                        new builder()
                                .type("insert")
                                .id("addUserRealInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userRealInfo.columnsArray)
                                                  .excludes("userId")
                                                  .excludes(["userId"])
                                })
                                .controller(controller => {
                                        controller.path("/userRealInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("userId")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserRealInfoByUserId")
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                        // idCardPicBack : excluded 
                        // idCardPicFront : excluded 
                        // idCardPicHand : excluded 
                        // realName : excluded
                        new builder()
                                .type("select")
                                .id("getUserRealInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userRealInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userRealInfo.columnsArray)
                                                  .excludes("userId")
                                                  .excludes(["idCardPicBack","idCardPicFront","idCardPicHand","realName"])
                                })
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
