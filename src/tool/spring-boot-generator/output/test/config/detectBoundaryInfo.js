const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
        items: [

                // add
                builder("insert", "addDetectBoundaryInfo").controller(controller => {
                        controller.path("/detectBoundaryInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectBoundaryInfoById").controller(controller => {
                        controller.path("/detectBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectBoundaryInfoById").controller(controller => {
                        controller.path("/detectBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectBoundaryInfoById").controller(controller => {
                        controller.path("/detectBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}