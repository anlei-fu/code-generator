const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
        items: [

                // add
                builder("insert", "addDamageRepositoryDevice").controller(controller => {
                        controller.path("/damageRepositoryDevice/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageRepositoryDeviceById").controller(controller => {
                        controller.path("/damageRepositoryDevice/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageRepositoryDeviceById").controller(controller => {
                        controller.path("/damageRepositoryDevice/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageRepositoryDeviceById").controller(controller => {
                        controller.path("/damageRepositoryDevice/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}