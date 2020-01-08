const { taskRunRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskRunRecordConfig = {
        table: taskRunRecord,
        name: "TaskRunRecord",
                items: [

                        // add
                        // id excluded 
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskRunRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskRunRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskRunRecordById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord/{id}");
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
                                .id("updateTaskRunRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskRunRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord/{id}");
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
                                .id("getTaskRunRecordById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskRunRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord/{id}");
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
                                .id("getTaskRunRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskRunRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskRunRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("pageDownloaded","range")
                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
