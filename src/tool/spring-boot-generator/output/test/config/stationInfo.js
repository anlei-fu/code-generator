const { stationInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.stationInfoConfig = {
        table: stationInfo,
        name: "StationInfo",
        items: [

                // add
                builder("insert", "addStationInfo").controller(controller => {
                        controller.path("/stationInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteStationInfoById").controller(controller => {
                        controller.path("/stationInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateStationInfoById").controller(controller => {
                        controller.path("/stationInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getStationInfoById").controller(controller => {
                        controller.path("/stationInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}