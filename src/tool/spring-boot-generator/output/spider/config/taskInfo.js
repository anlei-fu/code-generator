const { taskInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskInfoConfig = {
        table: taskInfo,
        name: "TaskInfo",
                items: [

                        // add
                        // id excluded 
                        // userId : validate --- @NotNull  
                        // mainConfigId : validate --- @NotNull  
                        // level : validate --- @NotNull  @Enum("level")  
                        // status : validate --- @NotNull  @Enum("status")
                        new builder()
                                .type("insert")
                                .id("addTaskInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("userId","@NotNull")
                                           .validate("mainConfigId","@NotNull")
                                           .validate("level","@NotNull")
                                           .validate("level","@Enum(\"level\")")
                                           .validate("status","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // level : validate --- @Enum("level")  
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateTaskInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(\"level\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTaskInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
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
                        // level : validates --- @Enum("level")  
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getTaskInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(\"level\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
