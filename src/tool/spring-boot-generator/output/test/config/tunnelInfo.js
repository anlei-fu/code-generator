const { tunnelInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.tunnelInfoConfig = {
        table: tunnelInfo,
        name: "TunnelInfo",
        items: [

                // add
                builder("insert", "addTunnelInfo").controller(controller => {
                        controller.path("/tunnelInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteTunnelInfoById").controller(controller => {
                        controller.path("/tunnelInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateTunnelInfoById").controller(controller => {
                        controller.path("/tunnelInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getTunnelInfoById").controller(controller => {
                        controller.path("/tunnelInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}