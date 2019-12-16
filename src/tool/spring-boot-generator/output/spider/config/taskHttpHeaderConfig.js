const { taskHttpHeaderConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskHttpHeaderConfigConfig = {
        table: taskHttpHeaderConfig,
        name: "TaskHttpHeaderConfig",
        items: [

                // add
                builder("insert", "addTaskHttpHeaderConfig").controller(controller => {
                        controller.path("/taskHttpHeaderConfig/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskHttpHeaderConfigById").controller(controller => {
                        controller.path("/taskHttpHeaderConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskHttpHeaderConfigById").controller(controller => {
                        controller.path("/taskHttpHeaderConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskHttpHeaderConfigById").controller(controller => {
                        controller.path("/taskHttpHeaderConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}