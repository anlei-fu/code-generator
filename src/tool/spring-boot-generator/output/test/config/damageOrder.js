const { damageOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageOrderConfig = {
        table: damageOrder,
        name: "DamageOrder",
        items: [

                // add
                builder("insert", "addDamageOrder").controller(controller => {
                        controller.path("/damageOrder/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageOrderById").controller(controller => {
                        controller.path("/damageOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageOrderById").controller(controller => {
                        controller.path("/damageOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageOrderById").controller(controller => {
                        controller.path("/damageOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}