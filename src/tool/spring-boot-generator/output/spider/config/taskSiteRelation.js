const { taskSiteRelation } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskSiteRelationConfig = {
        table: taskSiteRelation,
        name: "TaskSiteRelation",
        items: [

                // add
                builder("insert", "addTaskSiteRelation").controller(controller => {
                        controller.path("/taskSiteRelation/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTaskSiteRelationById").controller(controller => {
                        controller.path("/taskSiteRelation/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTaskSiteRelationById").controller(controller => {
                        controller.path("/taskSiteRelation/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTaskSiteRelationById").controller(controller => {
                        controller.path("/taskSiteRelation/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}