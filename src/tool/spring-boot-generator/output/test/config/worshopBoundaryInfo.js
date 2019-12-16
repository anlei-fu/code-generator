const { worshopBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.worshopBoundaryInfoConfig = {
        table: worshopBoundaryInfo,
        name: "WorshopBoundaryInfo",
        items: [

                // add
                builder("insert", "addWorshopBoundaryInfo").controller(controller => {
                        controller.path("/worshopBoundaryInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWorshopBoundaryInfoById").controller(controller => {
                        controller.path("/worshopBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWorshopBoundaryInfoById").controller(controller => {
                        controller.path("/worshopBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWorshopBoundaryInfoById").controller(controller => {
                        controller.path("/worshopBoundaryInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}