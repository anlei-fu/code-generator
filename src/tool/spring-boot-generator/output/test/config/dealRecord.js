const { dealRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.dealRecordConfig = {
        table: dealRecord,
        name: "DealRecord",
        items: [

                // add
                builder("insert", "addDealRecord").controller(controller => {
                        controller.path("/dealRecord/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDealRecordById").controller(controller => {
                        controller.path("/dealRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDealRecordById").controller(controller => {
                        controller.path("/dealRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDealRecordById").controller(controller => {
                        controller.path("/dealRecord/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}