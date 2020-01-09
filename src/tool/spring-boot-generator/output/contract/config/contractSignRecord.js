const { contractSignRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractSignRecordConfig = {
        table: contractSignRecord,
        name: "ContractSignRecord",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // signAfterFile : validate --- @Path  
                        // signBeforeFile : validate --- @Path
                        new builder()
                                .type("insert")
                                .id("addContractSignRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/contractSignRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("signAfterFile","@Path")
                                           .validate("signBeforeFile","@Path")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteContractSignRecordById")
                                .alias("t")
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
                        // createTime : excluded 
                        // signAfterFile : validate --- @Path  
                        // signBeforeFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateContractSignRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("signAfterFile","@Path")
                                           .validate("signBeforeFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractSignRecordById")
                                .alias("t")
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
                        // createTime : expression --- timeRange
                        // signAfterFile : excluded 
                        // signAfterHash : excluded 
                        // signBeforeFile : excluded 
                        // signBeforeHash : excluded 
                        // signPerson : excluded
                        new builder()
                                .type("select")
                                .id("getContractSignRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(contractSignRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractSignRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["signAfterFile","signAfterHash","signBeforeFile","signBeforeHash","signPerson"])
                                                  .exp("createTime","timeRange")
                                })
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
