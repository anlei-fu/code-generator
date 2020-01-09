const { contractNotaryRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractNotaryRecordConfig = {
        table: contractNotaryRecord,
        name: "ContractNotaryRecord",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // notaryStatus : validate --- @Enum("notaryStatus")
                        new builder()
                                .type("insert")
                                .id("addContractNotaryRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notaryStatus","@Enum(\"notaryStatus\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteContractNotaryRecordById")
                                .alias("t")
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
                        // createTime : excluded 
                        // notaryStatus : validate --- @Enum("notaryStatus")
                        new builder()
                                .type("update")
                                .id("updateContractNotaryRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("notaryStatus","@Enum(\"notaryStatus\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractNotaryRecordById")
                                .alias("t")
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
                        // createTime : expression --- timeRange
                        // notaryStatus : validates --- @Enum("notaryStatus")
                        new builder()
                                .type("select")
                                .id("getContractNotaryRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(contractNotaryRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractNotaryRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/contractNotaryRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notaryStatus","@Enum(\"notaryStatus\")")
                                })

                                .build()
                ]
}
