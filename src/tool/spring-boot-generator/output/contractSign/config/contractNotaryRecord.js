const { contractNotaryRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractNotaryRecordConfig = {
        table: contractNotaryRecord,
        name: "ContractNotaryRecord",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addContractNotaryRecord")
                                .includes(collection => {
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord");
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
                                .id("deleteContractNotaryRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // notaryStatus : validate --- @Enum(notaryStatus)
                        new builder()
                                .type("update")
                                .id("updateContractNotaryRecordById")
                                .includes(collection => {
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notaryStatus","@Enum(notaryStatus)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractNotaryRecordById")
                                .includes(collection=>{
                                        collection.includes(contractNotaryRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord/{id}");
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
                        // notaryStatus : validates --- @Enum(notaryStatus)  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(contractNotaryRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")
                                })
                                .id("getContractNotaryRecordList")
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notaryStatus","@Enum(notaryStatus)")
                                })
                                .build()
                ]
}