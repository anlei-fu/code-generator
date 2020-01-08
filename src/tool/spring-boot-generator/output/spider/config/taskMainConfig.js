const { taskMainConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskMainConfigConfig = {
        table: taskMainConfig,
        name: "TaskMainConfig",
                items: [

                        // add
                        // id excluded 
                        // taskId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskMainConfig")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskMainConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskMainConfigById")
                                .alias("t")
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
                                .alias("t")
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
                                .alias("t")
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
                                .id("getTaskMainConfigList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskMainConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskMainConfig.columnsArray)
                                                  .excludes("id")

                                })
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
