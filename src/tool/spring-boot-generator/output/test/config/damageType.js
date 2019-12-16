const { damageType } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
        items: [

                // add
                builder("insert", "addDamageType").controller(controller => {
                        controller.path("/damageType/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageTypeById").controller(controller => {
                        controller.path("/damageType/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageTypeById").controller(controller => {
                        controller.path("/damageType/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageTypeById").controller(controller => {
                        controller.path("/damageType/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}