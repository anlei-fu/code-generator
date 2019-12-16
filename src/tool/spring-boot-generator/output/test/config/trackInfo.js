const { trackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.trackInfoConfig = {
        table: trackInfo,
        name: "TrackInfo",
        items: [

                // add
                builder("insert", "addTrackInfo").controller(controller => {
                        controller.path("/trackInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTrackInfoById").controller(controller => {
                        controller.path("/trackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTrackInfoById").controller(controller => {
                        controller.path("/trackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTrackInfoById").controller(controller => {
                        controller.path("/trackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}