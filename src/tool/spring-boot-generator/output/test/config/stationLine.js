const { stationLine } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.stationLineConfig = {
        table: stationLine,
        name: "StationLine",
                items: [

                        // add
                        // id validate : @NotNull  
                        // stationId validate : @NotNull  
                        // lineId validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addStationLine")
                                .includes(collection => {
                                        collection.includes(stationLine.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("stationId","@NotNull")
                                           .validate("lineId","@NotNull")
                                           .validate("isDelete","@NotNull")
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
                        // status validate : @Enum(status)
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
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
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
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getStationLineList")
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}