const { taskMainConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskMainConfigConfig = {
        table: taskMainConfig,
        name: "TaskMainConfig",
        items: [

                // add
                builder("insert", "addTaskMainConfig").controller(controller => {
                        controller.path("/taskMainConfig/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskMainConfigById").controller(controller => {
                        controller.path("/taskMainConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskMainConfigById").controller(controller => {
                        controller.path("/taskMainConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskMainConfigById").controller(controller => {
                        controller.path("/taskMainConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}