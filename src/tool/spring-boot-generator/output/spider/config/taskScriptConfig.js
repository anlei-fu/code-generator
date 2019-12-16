const { taskScriptConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskScriptConfigConfig = {
        table: taskScriptConfig,
        name: "TaskScriptConfig",
        items: [

                // add
                builder("insert", "addTaskScriptConfig").controller(controller => {
                        controller.path("/taskScriptConfig/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskScriptConfigById").controller(controller => {
                        controller.path("/taskScriptConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskScriptConfigById").controller(controller => {
                        controller.path("/taskScriptConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskScriptConfigById").controller(controller => {
                        controller.path("/taskScriptConfig/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}