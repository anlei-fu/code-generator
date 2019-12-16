const { taskRunRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskRunRecordConfig = {
        table: taskRunRecord,
        name: "TaskRunRecord",
        items: [

                // add
                builder("insert", "addTaskRunRecord").controller(controller => {
                        controller.path("/taskRunRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskRunRecordById").controller(controller => {
                        controller.path("/taskRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskRunRecordById").controller(controller => {
                        controller.path("/taskRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskRunRecordById").controller(controller => {
                        controller.path("/taskRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}