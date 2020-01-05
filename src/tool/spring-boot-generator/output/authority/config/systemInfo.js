const { systemInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemInfoConfig = {
        table: systemInfo,
        name: "SystemInfo",
                items: [

                        // add
                        // createTime excluded 
                        // createUser : validate --- @NotNull  
                        // id excluded 
                        // name : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSystemInfo")
                                .includes(collection => {
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/systemInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("createUser","@NotNull")
                                           .validate("name","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemInfo/{id}");
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
                                .id("updateSystemInfoById")
                                .includes(collection => {
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemInfo/{id}");
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
                                .id("getSystemInfoById")
                                .includes(collection=>{
                                        collection.includes(systemInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemInfo/{id}");
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
                        // createTime : expression --- timeRange
                        // description : excluded 
                        // name : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(systemInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["description","name"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getSystemInfoList")
                                .controller(controller => {
                                        controller.path("/systemInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}