const { taskScriptConfigRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskScriptConfigRecordConfig = {
        table: taskScriptConfigRecord,
        name: "TaskScriptConfigRecord",
        items: [

                // add
                builder("insert", "addTaskScriptConfigRecord").controller(controller => {
                        controller.path("/taskScriptConfigRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskScriptConfigRecordById").controller(controller => {
                        controller.path("/taskScriptConfigRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskScriptConfigRecordById").controller(controller => {
                        controller.path("/taskScriptConfigRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskScriptConfigRecordById").controller(controller => {
                        controller.path("/taskScriptConfigRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}