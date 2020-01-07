const { taskScriptConfigRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskScriptConfigRecordConfig = {
        table: taskScriptConfigRecord,
        name: "TaskScriptConfigRecord",
                items: [

                        // add
                        // id excluded 
                        // file : validate --- @Path  
                        // version : validate --- @NotNull  
                        // action : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskScriptConfigRecord")
                                .includes(collection => {
                                        collection.includes(taskScriptConfigRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("file","@Path")
                                           .validate("version","@NotNull")
                                           .validate("action","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskScriptConfigRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("updateTaskScriptConfigRecordById")
                                .includes(collection => {
                                        collection.includes(taskScriptConfigRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("getTaskScriptConfigRecordById")
                                .includes(collection=>{
                                        collection.includes(taskScriptConfigRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                        collection.includes(taskScriptConfigRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskScriptConfigRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["file"])
                                })
                                .id("getTaskScriptConfigRecordList")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}