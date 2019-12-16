const { taskCookieConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskCookieConfigConfig = {
        table: taskCookieConfig,
        name: "TaskCookieConfig",
        items: [

                // add
                builder("insert", "addTaskCookieConfig").controller(controller => {
                        controller.path("/taskCookieConfig/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskCookieConfigById").controller(controller => {
                        controller.path("/taskCookieConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskCookieConfigById").controller(controller => {
                        controller.path("/taskCookieConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskCookieConfigById").controller(controller => {
                        controller.path("/taskCookieConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}