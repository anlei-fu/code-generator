const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
        items: [

                // add
                builder("insert", "addThighTrackInfo").controller(controller => {
                        controller.path("/thighTrackInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteThighTrackInfoById").controller(controller => {
                        controller.path("/thighTrackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateThighTrackInfoById").controller(controller => {
                        controller.path("/thighTrackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getThighTrackInfoById").controller(controller => {
                        controller.path("/thighTrackInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}