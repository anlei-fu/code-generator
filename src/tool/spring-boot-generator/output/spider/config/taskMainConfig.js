const { taskMainConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskMainConfigConfig = {
        table: taskMainConfig,
        name: "TaskMainConfig",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskMainConfig")
                                .includes(collection => {
                                        collection.includes(taskMainConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskMainConfigById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                .id("updateTaskMainConfigById")
                                .includes(collection => {
                                        collection.includes(taskMainConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                .id("getTaskMainConfigById")
                                .includes(collection=>{
                                        collection.includes(taskMainConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                        collection.includes(taskMainConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskMainConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getTaskMainConfigList")
                                .controller(controller => {
                                        controller.path("/taskMainConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}