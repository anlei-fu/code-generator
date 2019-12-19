const { worshopBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.worshopBoundaryInfoConfig = {
        table: worshopBoundaryInfo,
        name: "WorshopBoundaryInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWorshopBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorshopBoundaryInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("updateWorshopBoundaryInfoById")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("getWorshopBoundaryInfoById")
                                .includes(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWorshopBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}