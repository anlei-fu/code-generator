const { workareaInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workareaInfoConfig = {
        table: workareaInfo,
        name: "WorkareaInfo",
        items: [

                // add
                builder("insert", "addWorkareaInfo").controller(controller => {
                        controller.path("/workareaInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorkareaInfoById").controller(controller => {
                        controller.path("/workareaInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorkareaInfoById").controller(controller => {
                        controller.path("/workareaInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorkareaInfoById").controller(controller => {
                        controller.path("/workareaInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}