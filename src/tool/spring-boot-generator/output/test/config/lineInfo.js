const { lineInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.lineInfoConfig = {
        table: lineInfo,
        name: "LineInfo",
        items: [

                // add
                builder("insert", "addLineInfo").controller(controller => {
                        controller.path("/lineInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteLineInfoById").controller(controller => {
                        controller.path("/lineInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateLineInfoById").controller(controller => {
                        controller.path("/lineInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getLineInfoById").controller(controller => {
                        controller.path("/lineInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}