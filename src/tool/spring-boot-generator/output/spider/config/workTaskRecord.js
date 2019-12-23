const { workTaskRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workTaskRecordConfig = {
        table: workTaskRecord,
        name: "WorkTaskRecord",
                items: [

                        // add
                        // downloadSucess : validate --- @NotNull  
                        // exitCode : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // pageDownloaded : validate --- @NotNull  
                        // success : validate --- @NotNull  
                        // taskId : validate --- @NotNull  
                        // taskMainConfigId : validate --- @NotNull  
                        // workerId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addWorkTaskRecord")
                                .includes(collection => {
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/workTaskRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("downloadSucess","@NotNull")
                                           .validate("exitCode","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("pageDownloaded","@NotNull")
                                           .validate("success","@NotNull")
                                           .validate("taskId","@NotNull")
                                           .validate("taskMainConfigId","@NotNull")
                                           .validate("workerId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkTaskRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workTaskRecord/{id}");
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
                                .id("updateWorkTaskRecordById")
                                .includes(collection => {
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workTaskRecord/{id}");
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
                                .id("getWorkTaskRecordById")
                                .includes(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workTaskRecord/{id}");
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

                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getWorkTaskRecordList")
                                .controller(controller => {
                                        controller.path("/workTaskRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}