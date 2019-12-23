const { taskInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskInfoConfig = {
        table: taskInfo,
        name: "TaskInfo",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // level : validate --- @NotNull  
                        // mainConfigId : validate --- @NotNull  
                        // status : validate --- @NotNull  
                        // userId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTaskInfo")
                                .includes(collection => {
                                        collection.includes(taskInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("level","@NotNull")
                                           .validate("mainConfigId","@NotNull")
                                           .validate("status","@NotNull")
                                           .validate("userId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskInfoById")
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
                        // description : validate --- @Ip  
                        // level : validate --- @Enum(level)  
                        // status : validate --- @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateTaskInfoById")
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
                                           .validate("description","@Ip")
                                           .validate("level","@Enum(level)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTaskInfoById")
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
                        // level : validates --- @Enum(level)  
                        // status : validates --- @Enum(status)
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(taskInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description"])
                                })
                                .id("getTaskInfoList")
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(level)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}