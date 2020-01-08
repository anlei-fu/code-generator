const { systemInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemInfoConfig = {
        table: systemInfo,
        name: "SystemInfo",
                items: [

                        // add
                        // id excluded 
                        // name : validate --- @NotNull  
                        // createTime excluded 
                        // createUser : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSystemInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/systemInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("name","@NotNull")
                                           .validate("createUser","@NotNull")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // createTime : excluded 
                        // createUser : excluded
                        new builder()
                                .type("update")
                                .id("updateSystemInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","createUser"])

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
                                .id("getSystemInfoByUserAndUserAndUserAndUserAndId")
                                .alias("t")
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
                        // name : excluded 
                        // description : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getSystemInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","description"])
                                                  .exp("createTime","timeRange")
                                })
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
