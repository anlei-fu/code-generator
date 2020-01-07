const { taskScriptConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskScriptConfigConfig = {
        table: taskScriptConfig,
        name: "TaskScriptConfig",
                items: [

                        // add
                        // id excluded 
                        // taskConfigMainId : validate --- @NotNull  
                        // file : validate --- @Path  
                        // version : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskScriptConfig")
                                .includes(collection => {
                                        collection.includes(taskScriptConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskConfigMainId","@NotNull")
                                           .validate("file","@Path")
                                           .validate("version","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskScriptConfigById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // file : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateTaskScriptConfigById")
                                .includes(collection => {
                                        collection.includes(taskScriptConfig.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("file","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTaskScriptConfigById")
                                .includes(collection=>{
                                        collection.includes(taskScriptConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
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
                        // file : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(taskScriptConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskScriptConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["file"])
                                })
                                .id("getTaskScriptConfigList")
                                .controller(controller => {
                                        controller.path("/taskScriptConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}