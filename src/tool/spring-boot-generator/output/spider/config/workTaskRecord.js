const { workTaskRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workTaskRecordConfig = {
        table: workTaskRecord,
        name: "WorkTaskRecord",
                items: [

                        // add
                        // id excluded 
                        // taskId : validate --- @NotNull  
                        // workerId : validate --- @NotNull  
                        // taskMainConfigId : validate --- @NotNull  
                        // pageDownloaded : validate --- @NotNull  
                        // downloadSucess : validate --- @NotNull  
                        // success : validate --- @NotNull  
                        // exitCode : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addWorkTaskRecord")
                                .includes(collection => {
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/workTaskRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskId","@NotNull")
                                           .validate("workerId","@NotNull")
                                           .validate("taskMainConfigId","@NotNull")
                                           .validate("pageDownloaded","@NotNull")
                                           .validate("downloadSucess","@NotNull")
                                           .validate("success","@NotNull")
                                           .validate("exitCode","@NotNull")
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
                        // pageDownloaded : expression --- range
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")
                                                  .expression("pageDownloaded","range")
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