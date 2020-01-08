const { domainBlockRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainBlockRecordConfig = {
        table: domainBlockRecord,
        name: "DomainBlockRecord",
                items: [

                        // add
                        // id excluded 
                        // domainId : validate --- @NotNull  
                        // workerId : validate --- @NotNull  
                        // taskId : validate --- @NotNull  
                        // userId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainBlockRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainBlockRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("workerId","@NotNull")
                                           .validate("taskId","@NotNull")
                                           .validate("userId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainBlockRecordById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("updateDomainBlockRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainBlockRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("getDomainBlockRecordById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainBlockRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                        // remark : excluded
                        new builder()
                                .type("select")
                                .id("getDomainBlockRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainBlockRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainBlockRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
