const { userDeductRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userDeductRecordConfig = {
        table: userDeductRecord,
        name: "UserDeductRecord",
                items: [

                        // add
                        // id excluded 
                        // taskId : validate --- @NotNull  
                        // price : validate --- @NotNull  
                        // amount : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserDeductRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userDeductRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskId","@NotNull")
                                           .validate("price","@NotNull")
                                           .validate("amount","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserDeductRecordById")
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                        // price : expression --- range
                        // amount : expression --- range
                        new builder()
                                .type("select")
                                .id("getUserDeductRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userDeductRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userDeductRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("price","range")
                                                  .exp("amount","range")
                                })
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
