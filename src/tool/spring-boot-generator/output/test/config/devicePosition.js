const { devicePosition } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.devicePositionConfig = {
        table: devicePosition,
        name: "DevicePosition",
        items: [

                // add
                builder("insert", "addDevicePosition").controller(controller => {
                        controller.path("/devicePosition/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDevicePositionById").controller(controller => {
                        controller.path("/devicePosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDevicePositionById").controller(controller => {
                        controller.path("/devicePosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDevicePositionById").controller(controller => {
                        controller.path("/devicePosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}