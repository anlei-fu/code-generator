const { workerRunRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workerRunRecordConfig = {
        table: workerRunRecord,
        name: "WorkerRunRecord",
                items: [

                        // add
                        // id : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addWorkerRunRecord")
                                .includes(collection => {
                                        collection.includes(workerRunRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkerRunRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateWorkerRunRecordById")
                                .includes(collection => {
                                        collection.includes(workerRunRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWorkerRunRecordById")
                                .includes(collection=>{
                                        collection.includes(workerRunRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList

                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workerRunRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workerRunRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getWorkerRunRecordList")
                                .controller(controller => {
                                        controller.path("/workerRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}