const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
        items: [

                // add
                builder("insert", "addCurveInfo").controller(controller => {
                        controller.path("/curveInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteCurveInfoById").controller(controller => {
                        controller.path("/curveInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateCurveInfoById").controller(controller => {
                        controller.path("/curveInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getCurveInfoById").controller(controller => {
                        controller.path("/curveInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}