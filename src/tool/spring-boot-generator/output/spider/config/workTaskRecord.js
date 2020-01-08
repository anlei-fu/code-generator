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
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                                .id("getWorkTaskRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workTaskRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("pageDownloaded","range")
                                })
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
