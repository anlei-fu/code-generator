const { stationLine } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.stationLineConfig = {
        table: stationLine,
        name: "StationLine",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addStationLine")
                                .includes(collection => {
                                        collection.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationLineById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                .id("updateStationLineById")
                                .includes(collection => {
                                        collection.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                .id("getStationLineById")
                                .includes(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                        collection.includes(stationLine.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .id("getStationLineList")
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}