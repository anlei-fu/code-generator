const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
        items: [

                // add
                builder("insert", "addDamageRepository").controller(controller => {
                        controller.path("/damageRepository/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageRepositoryById").controller(controller => {
                        controller.path("/damageRepository/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageRepositoryById").controller(controller => {
                        controller.path("/damageRepository/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageRepositoryById").controller(controller => {
                        controller.path("/damageRepository/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}