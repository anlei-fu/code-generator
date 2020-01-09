const { systemLog } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemLogConfig = {
        table: systemLog,
        name: "SystemLog",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addSystemLog")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemLog.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/systemLog");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemLogById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemLog/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateSystemLogById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemLog.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemLog/{id}");
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
                                .id("getSystemLogById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemLog.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemLog/{id}");
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
                        // summary : excluded
                        new builder()
                                .type("select")
                                .id("getSystemLogList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemLog.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemLog.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["summary"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/systemLog");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })

                                .build()
                ]
}
