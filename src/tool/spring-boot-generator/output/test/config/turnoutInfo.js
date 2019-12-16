const { turnoutInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.turnoutInfoConfig = {
        table: turnoutInfo,
        name: "TurnoutInfo",
        items: [

                // add
                builder("insert", "addTurnoutInfo").controller(controller => {
                        controller.path("/turnoutInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTurnoutInfoById").controller(controller => {
                        controller.path("/turnoutInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTurnoutInfoById").controller(controller => {
                        controller.path("/turnoutInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTurnoutInfoById").controller(controller => {
                        controller.path("/turnoutInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}