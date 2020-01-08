const { stationLine } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.stationLineConfig = {
        table: stationLine,
        name: "StationLine",
                items: [

                        // add
                        // id excluded 
                        // stationId : validate --- @NotNull  
                        // lineId : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addStationLine")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(stationLine.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("stationId","@NotNull")
                                           .validate("lineId","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationLineById")
                                .alias("t")
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
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateStationLineById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(stationLine.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getStationLineById")
                                .alias("t")
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
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getStationLineList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(stationLine.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
