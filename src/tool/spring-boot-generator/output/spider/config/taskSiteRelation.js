const { taskSiteRelation } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.taskSiteRelationConfig = {
        table: taskSiteRelation,
        name: "TaskSiteRelation",
                items: [

                        // add
                        // id excluded 
                        // siteId : validate --- @NotNull  
                        // taskId : validate --- @NotNull  
                        // userId : validate --- @NotNull  
                        // domain : validate --- @Url
                        new builder()
                                .type("insert")
                                .id("addTaskSiteRelation")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskSiteRelation.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("siteId","@NotNull")
                                           .validate("taskId","@NotNull")
                                           .validate("userId","@NotNull")
                                           .validate("domain","@Url")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskSiteRelationById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // domain : validate --- @Url
                        new builder()
                                .type("update")
                                .id("updateTaskSiteRelationById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(taskSiteRelation.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domain","@Url")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTaskSiteRelationById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskSiteRelation.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                        // domain : validates --- @Url
                        new builder()
                                .type("select")
                                .id("getTaskSiteRelationList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(taskSiteRelation.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(taskSiteRelation.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("domain","@Url")
                                })
                                .build()
                ]
}
