const { workerInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerInfoConfig = {
        table: workerInfo,
        name: "WorkerInfo",
        items: [

                // add
                builder("insert", "addWorkerInfo").controller(controller => {
                        controller.path("/workerInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorkerInfoById").controller(controller => {
                        controller.path("/workerInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorkerInfoById").controller(controller => {
                        controller.path("/workerInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorkerInfoById").controller(controller => {
                        controller.path("/workerInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}