const { taskCookieConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskCookieConfigConfig = {
        table: taskCookieConfig,
        name: "TaskCookieConfig",
                items: [

                        // add
                        // id excluded 
                        // taskConfigMainId : validate --- @NotNull  
                        // domainId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskCookieConfig")
                                .includes(collection => {
                                        collection.includes(taskCookieConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskConfigMainId","@NotNull")
                                           .validate("domainId","@NotNull")
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
                        // key : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(taskCookieConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskCookieConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["key"])
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