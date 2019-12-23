const { userPurchaseRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userPurchaseRecordConfig = {
        table: userPurchaseRecord,
        name: "UserPurchaseRecord",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserPurchaseRecord")
                                .includes(collection => {
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord");
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
                                .id("deleteUserPurchaseRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // contractType : validate --- @Enum(contractType)
                        new builder()
                                .type("update")
                                .id("updateUserPurchaseRecordById")
                                .includes(collection => {
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(contractType)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserPurchaseRecordById")
                                .includes(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
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
                        // contractType : validates --- @Enum(contractType)  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserPurchaseRecordList")
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(contractType)")
                                })
                                .build()
                ]
}