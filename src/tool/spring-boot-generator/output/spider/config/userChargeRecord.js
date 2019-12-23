const { userChargeRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userChargeRecordConfig = {
        table: userChargeRecord,
        name: "UserChargeRecord",
                items: [

                        // add
                        // amount : validate --- @NotNull  
                        // chargeAccount : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // orderId : validate --- @NotNull  
                        // status : validate --- @NotNull  
                        // userId : validate --- @NotNull  
                        // way : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserChargeRecord")
                                .includes(collection => {
                                        collection.includes(userChargeRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("amount","@NotNull")
                                           .validate("chargeAccount","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("orderId","@NotNull")
                                           .validate("status","@NotNull")
                                           .validate("userId","@NotNull")
                                           .validate("way","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserChargeRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // status : validate --- @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateUserChargeRecordById")
                                .includes(collection => {
                                        collection.includes(userChargeRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserChargeRecordById")
                                .includes(collection=>{
                                        collection.includes(userChargeRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
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
                        // status : validates --- @Enum(status)
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userChargeRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userChargeRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getUserChargeRecordList")
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}