const { userChargeRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userChargeRecordConfig = {
        table: userChargeRecord,
        name: "UserChargeRecord",
                items: [

                        // add
                        // id excluded 
                        // userId : validate --- @NotNull  
                        // way : validate --- @NotNull  
                        // chargeAccount : validate --- @NotNull  
                        // orderId : validate --- @NotNull  
                        // amount : validate --- @NotNull  
                        // status : validate --- @NotNull  @Enum("status")
                        new builder()
                                .type("insert")
                                .id("addUserChargeRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userChargeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("userId","@NotNull")
                                           .validate("way","@NotNull")
                                           .validate("chargeAccount","@NotNull")
                                           .validate("orderId","@NotNull")
                                           .validate("amount","@NotNull")
                                           .validate("status","@NotNull")
                                           .validate("status","@Enum(\"status\")")
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
                                .id("deleteUserChargeRecordByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),
                                
                        // updateById
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateUserChargeRecordByUserAndId")
                                .alias("t")
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
                                           .validate("status","@Enum(\"status\")")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserChargeRecordByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getList
                        // amount : expression --- range
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getUserChargeRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userChargeRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userChargeRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("amount","range")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
