const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
        items: [

                // add
                builder("insert", "addDamageDealUser").controller(controller => {
                        controller.path("/damageDealUser/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDamageDealUserById").controller(controller => {
                        controller.path("/damageDealUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDamageDealUserById").controller(controller => {
                        controller.path("/damageDealUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDamageDealUserById").controller(controller => {
                        controller.path("/damageDealUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}