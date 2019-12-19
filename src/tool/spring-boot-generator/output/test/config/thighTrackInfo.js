const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addThighTrackInfo")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteThighTrackInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                                .id("updateThighTrackInfoById")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                                .id("getThighTrackInfoById")
                                .includes(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getThighTrackInfoList")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}