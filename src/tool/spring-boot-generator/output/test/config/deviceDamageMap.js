const { deviceDamageMap } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.deviceDamageMapConfig = {
        table: deviceDamageMap,
        name: "DeviceDamageMap",
        items: [

                // add
                builder("insert", "addDeviceDamageMap").controller(controller => {
                        controller.path("/deviceDamageMap/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDeviceDamageMapById").controller(controller => {
                        controller.path("/deviceDamageMap/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDeviceDamageMapById").controller(controller => {
                        controller.path("/deviceDamageMap/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDeviceDamageMapById").controller(controller => {
                        controller.path("/deviceDamageMap/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}