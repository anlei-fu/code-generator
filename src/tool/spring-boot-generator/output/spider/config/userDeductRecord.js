const { userDeductRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userDeductRecordConfig = {
        table: userDeductRecord,
        name: "UserDeductRecord",
                items: [

                        // add
                        // amount : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // price : validate --- @NotNull  
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserDeductRecord")
                                .includes(collection => {
                                        collection.includes(userDeductRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("amount","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("price","@NotNull")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserDeductRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateUserDeductRecordById")
                                .includes(collection => {
                                        collection.includes(userDeductRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserDeductRecordById")
                                .includes(collection=>{
                                        collection.includes(userDeductRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                        // amount : expression --- range
                        // price : expression --- range
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userDeductRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userDeductRecord.columnsArray)
                                                  .excludes("id")
                                                  .expression("amount","range")
                                                  .expression("price","range")
                                })
                                .id("getUserDeductRecordList")
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}