const { adminInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.adminInfoConfig = {
        table: adminInfo,
        name: "AdminInfo",
        items: [

                // add
                builder("insert", "addAdminInfo").controller(controller => {
                        controller.path("/adminInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteAdminInfoById").controller(controller => {
                        controller.path("/adminInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateAdminInfoById").controller(controller => {
                        controller.path("/adminInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getAdminInfoById").controller(controller => {
                        controller.path("/adminInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}