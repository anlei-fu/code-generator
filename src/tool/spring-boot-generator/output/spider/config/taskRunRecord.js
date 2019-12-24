const { taskRunRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskRunRecordConfig = {
        table: taskRunRecord,
        name: "TaskRunRecord",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskRunRecord")
                                .includes(collection => {
                                        collection.includes(taskRunRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/taskRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskRunRecordById")
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
                                .includes(collection=>{
                                        collection.includes(taskRunRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskRunRecord.columnsArray)
                                                  .excludes("id")
                                                  .expression("pageDownloaded","range")
                                })
                                .id("getTaskRunRecordList")
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