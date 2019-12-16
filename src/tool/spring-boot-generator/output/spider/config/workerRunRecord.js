const { workerRunRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerRunRecordConfig = {
        table: workerRunRecord,
        name: "WorkerRunRecord",
        items: [

                // add
                builder("insert", "addWorkerRunRecord").controller(controller => {
                        controller.path("/workerRunRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorkerRunRecordById").controller(controller => {
                        controller.path("/workerRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorkerRunRecordById").controller(controller => {
                        controller.path("/workerRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorkerRunRecordById").controller(controller => {
                        controller.path("/workerRunRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}