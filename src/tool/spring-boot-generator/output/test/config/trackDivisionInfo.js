const { trackDivisionInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTrackDivisionInfo")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackDivisionInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("updateTrackDivisionInfoById")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("getTrackDivisionInfoById")
                                .includes(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                        collection.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTrackDivisionInfoList")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}