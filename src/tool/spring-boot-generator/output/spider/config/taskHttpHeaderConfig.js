const { taskHttpHeaderConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskHttpHeaderConfigConfig = {
        table: taskHttpHeaderConfig,
        name: "TaskHttpHeaderConfig",
                items: [

                        // add
                        // id excluded 
                        // taskConfigMainId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskHttpHeaderConfig")
                                .includes(collection => {
                                        collection.includes(taskHttpHeaderConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskConfigMainId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskHttpHeaderConfigById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("updateTaskHttpHeaderConfigById")
                                .includes(collection => {
                                        collection.includes(taskHttpHeaderConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("getTaskHttpHeaderConfigById")
                                .includes(collection=>{
                                        collection.includes(taskHttpHeaderConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                        // key : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(taskHttpHeaderConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskHttpHeaderConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["key"])
                                })
                                .id("getTaskHttpHeaderConfigList")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}