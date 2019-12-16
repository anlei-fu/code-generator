const { userChargeRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userChargeRecordConfig = {
        table: userChargeRecord,
        name: "UserChargeRecord",
        items: [

                // add
                builder("insert", "addUserChargeRecord").controller(controller => {
                        controller.path("/userChargeRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteUserChargeRecordById").controller(controller => {
                        controller.path("/userChargeRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateUserChargeRecordById").controller(controller => {
                        controller.path("/userChargeRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getUserChargeRecordById").controller(controller => {
                        controller.path("/userChargeRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}