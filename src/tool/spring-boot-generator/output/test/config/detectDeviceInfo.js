const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
        items: [

                // add
                builder("insert", "addDetectDeviceInfo").controller(controller => {
                        controller.path("/detectDeviceInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectDeviceInfoById").controller(controller => {
                        controller.path("/detectDeviceInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectDeviceInfoById").controller(controller => {
                        controller.path("/detectDeviceInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectDeviceInfoById").controller(controller => {
                        controller.path("/detectDeviceInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}