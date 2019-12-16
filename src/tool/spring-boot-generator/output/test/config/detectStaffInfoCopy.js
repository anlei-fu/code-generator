const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
        items: [

                // add
                builder("insert", "addDetectStaffInfoCopy").controller(controller => {
                        controller.path("/detectStaffInfoCopy/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectStaffInfoCopyById").controller(controller => {
                        controller.path("/detectStaffInfoCopy/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectStaffInfoCopyById").controller(controller => {
                        controller.path("/detectStaffInfoCopy/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectStaffInfoCopyById").controller(controller => {
                        controller.path("/detectStaffInfoCopy/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}