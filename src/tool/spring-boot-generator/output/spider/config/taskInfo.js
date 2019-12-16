const { taskInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskInfoConfig = {
        table: taskInfo,
        name: "TaskInfo",
        items: [

                // add
                builder("insert", "addTaskInfo").controller(controller => {
                        controller.path("/taskInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskInfoById").controller(controller => {
                        controller.path("/taskInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskInfoById").controller(controller => {
                        controller.path("/taskInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskInfoById").controller(controller => {
                        controller.path("/taskInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}