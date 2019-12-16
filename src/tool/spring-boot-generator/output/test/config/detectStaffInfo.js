const { detectStaffInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoConfig = {
        table: detectStaffInfo,
        name: "DetectStaffInfo",
        items: [

                // add
                builder("insert", "addDetectStaffInfo").controller(controller => {
                        controller.path("/detectStaffInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectStaffInfoById").controller(controller => {
                        controller.path("/detectStaffInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectStaffInfoById").controller(controller => {
                        controller.path("/detectStaffInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectStaffInfoById").controller(controller => {
                        controller.path("/detectStaffInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}