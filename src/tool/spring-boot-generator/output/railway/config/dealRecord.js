const { dealRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.dealRecordConfig = {
        table: dealRecord,
        name: "DealRecord",
                items: [

                        // add
                        // createTime excluded 
                        // deleteAuditStatus : validate --- @Enum("deleteAuditStatus")  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDealRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/dealRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deleteAuditStatus","@Enum(\"deleteAuditStatus\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDealRecordById")
                                .alias("t")
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
                        // createTime : excluded 
                        // deleteAuditStatus : validate --- @Enum("deleteAuditStatus")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDealRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("deleteAuditStatus","@Enum(\"deleteAuditStatus\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDealRecordById")
                                .alias("t")
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
                        // createTime : expression --- timeRange
                        // dealRemark : excluded 
                        // deleteAuditStatus : validates --- @Enum("deleteAuditStatus")
                        new builder()
                                .type("select")
                                .id("getDealRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(dealRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(dealRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["dealRemark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/dealRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deleteAuditStatus","@Enum(\"deleteAuditStatus\")")
                                })

                                .build()
                ]
}
