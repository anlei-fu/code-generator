const { domainBlockRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainBlockRecordConfig = {
        table: domainBlockRecord,
        name: "DomainBlockRecord",
                items: [

                        // add
                        // domainId : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // taskId : validate --- @NotNull  
                        // userId : validate --- @NotNull  
                        // workerId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainBlockRecord")
                                .includes(collection => {
                                        collection.includes(domainBlockRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("taskId","@NotNull")
                                           .validate("userId","@NotNull")
                                           .validate("workerId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainBlockRecordById")
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
                                .includes(collection=>{
                                        collection.includes(domainBlockRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainBlockRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .id("getDomainBlockRecordList")
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