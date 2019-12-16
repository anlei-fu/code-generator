const { userDeductRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userDeductRecordConfig = {
        table: userDeductRecord,
        name: "UserDeductRecord",
        items: [

                // add
                builder("insert", "addUserDeductRecord").controller(controller => {
                        controller.path("/userDeductRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteUserDeductRecordById").controller(controller => {
                        controller.path("/userDeductRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateUserDeductRecordById").controller(controller => {
                        controller.path("/userDeductRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getUserDeductRecordById").controller(controller => {
                        controller.path("/userDeductRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}