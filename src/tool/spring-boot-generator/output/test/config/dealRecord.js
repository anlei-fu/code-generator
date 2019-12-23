const { dealRecord } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.dealRecordConfig = {
        table: dealRecord,
        name: "DealRecord",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDealRecord")
                                .includes(collection => {
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/dealRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDealRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/dealRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // deleteAuditStatus validate : @Enum(deleteAuditStatus)
                        new builder()
                                .type("update")
                                .id("updateDealRecordById")
                                .includes(collection => {
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/dealRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deleteAuditStatus","@Enum(deleteAuditStatus)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDealRecordById")
                                .includes(collection=>{
                                        collection.includes(dealRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/dealRecord/{id}");
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
                        // dealRemark excluded 
                        // createTime expression : timeRange
                        // deleteAuditStatus validate : @Enum(deleteAuditStatus)
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(dealRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["dealRemark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDealRecordList")
                                .controller(controller => {
                                        controller.path("/dealRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deleteAuditStatus","@Enum(deleteAuditStatus)")
                                })
                                .build()
                ]
}