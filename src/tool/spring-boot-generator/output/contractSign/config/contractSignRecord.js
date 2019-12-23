const { contractSignRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractSignRecordConfig = {
        table: contractSignRecord,
        name: "ContractSignRecord",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addContractSignRecord")
                                .includes(collection => {
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/contractSignRecord");
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
                                .id("deleteContractSignRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSignRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // signBeforeFile : validate --- @Path  
                        // signAfterFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateContractSignRecordById")
                                .includes(collection => {
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSignRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("signBeforeFile","@Path")
                                           .validate("signAfterFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractSignRecordById")
                                .includes(collection=>{
                                        collection.includes(contractSignRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSignRecord/{id}");
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
                        // signBeforeFile : excluded 
                        // signAfterFile : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(contractSignRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["signBeforeFile","signAfterFile"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getContractSignRecordList")
                                .controller(controller => {
                                        controller.path("/contractSignRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}