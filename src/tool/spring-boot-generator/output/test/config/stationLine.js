const { stationLine } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.stationLineConfig = {
        table: stationLine,
        name: "StationLine",
        items: [

                // add
                builder("insert", "addStationLine").controller(controller => {
                        controller.path("/stationLine/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteStationLineById").controller(controller => {
                        controller.path("/stationLine/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateStationLineById").controller(controller => {
                        controller.path("/stationLine/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getStationLineById").controller(controller => {
                        controller.path("/stationLine/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}