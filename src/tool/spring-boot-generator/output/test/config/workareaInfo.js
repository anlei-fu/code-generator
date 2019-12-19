const { workareaInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workareaInfoConfig = {
        table: workareaInfo,
        name: "WorkareaInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWorkareaInfo")
                                .includes(collection => {
                                        collection.includes(workareaInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkareaInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
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
                                .id("updateWorkareaInfoById")
                                .includes(collection => {
                                        collection.includes(workareaInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWorkareaInfoById")
                                .includes(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
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
                                        collection.includes(workareaInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWorkareaInfoList")
                                .controller(controller => {
                                        controller.path("/workareaInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}