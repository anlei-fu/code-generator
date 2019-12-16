const { trackDivisionInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
        items: [

                // add
                builder("insert", "addTrackDivisionInfo").controller(controller => {
                        controller.path("/trackDivisionInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTrackDivisionInfoById").controller(controller => {
                        controller.path("/trackDivisionInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTrackDivisionInfoById").controller(controller => {
                        controller.path("/trackDivisionInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTrackDivisionInfoById").controller(controller => {
                        controller.path("/trackDivisionInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}