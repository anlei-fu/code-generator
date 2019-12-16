const { bridgeInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bridgeInfoConfig = {
        table: bridgeInfo,
        name: "BridgeInfo",
        items: [

                // add
                builder("insert", "addBridgeInfo").controller(controller => {
                        controller.path("/bridgeInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteBridgeInfoById").controller(controller => {
                        controller.path("/bridgeInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateBridgeInfoById").controller(controller => {
                        controller.path("/bridgeInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getBridgeInfoById").controller(controller => {
                        controller.path("/bridgeInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}