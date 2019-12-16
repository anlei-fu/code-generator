const { workTaskRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workTaskRecordConfig = {
        table: workTaskRecord,
        name: "WorkTaskRecord",
        items: [

                // add
                builder("insert", "addWorkTaskRecord").controller(controller => {
                        controller.path("/workTaskRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorkTaskRecordById").controller(controller => {
                        controller.path("/workTaskRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorkTaskRecordById").controller(controller => {
                        controller.path("/workTaskRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorkTaskRecordById").controller(controller => {
                        controller.path("/workTaskRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}