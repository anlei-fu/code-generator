const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
        items: [

                // add
                builder("insert", "addDamageRepositoryPosition").controller(controller => {
                        controller.path("/damageRepositoryPosition/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageRepositoryPositionById").controller(controller => {
                        controller.path("/damageRepositoryPosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageRepositoryPositionById").controller(controller => {
                        controller.path("/damageRepositoryPosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageRepositoryPositionById").controller(controller => {
                        controller.path("/damageRepositoryPosition/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}