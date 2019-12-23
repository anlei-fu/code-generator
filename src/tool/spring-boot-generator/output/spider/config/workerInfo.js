const { workerInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workerInfoConfig = {
        table: workerInfo,
        name: "WorkerInfo",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // ip : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addWorkerInfo")
                                .includes(collection => {
                                        collection.includes(workerInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/workerInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("ip","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkerInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // description : validate --- @Ip  
                        // ip : validate --- @Ip
                        new builder()
                                .type("update")
                                .id("updateWorkerInfoById")
                                .includes(collection => {
                                        collection.includes(workerInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("description","@Ip")
                                           .validate("ip","@Ip")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWorkerInfoById")
                                .includes(collection=>{
                                        collection.includes(workerInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
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
                        // description : excluded 
                        // ip : validates --- @Ip
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workerInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workerInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                })
                                .id("getWorkerInfoList")
                                .controller(controller => {
                                        controller.path("/workerInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("ip","@Ip")
                                })
                                .build()
                ]
}