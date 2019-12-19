const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectBoundaryInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                .id("updateDetectBoundaryInfoById")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                .id("getDetectBoundaryInfoById")
                                .includes(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}