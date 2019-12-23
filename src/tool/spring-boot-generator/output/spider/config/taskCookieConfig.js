const { taskCookieConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskCookieConfigConfig = {
        table: taskCookieConfig,
        name: "TaskCookieConfig",
                items: [

                        // add
                        // domainId : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // taskConfigMainId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskCookieConfig")
                                .includes(collection => {
                                        collection.includes(taskCookieConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domainId","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("taskConfigMainId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskCookieConfigById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
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
                                .id("updateTaskCookieConfigById")
                                .includes(collection => {
                                        collection.includes(taskCookieConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
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
                                .id("getTaskCookieConfigById")
                                .includes(collection=>{
                                        collection.includes(taskCookieConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
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
                                        collection.includes(taskCookieConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskCookieConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getTaskCookieConfigList")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}