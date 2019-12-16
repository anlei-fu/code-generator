const { weldingInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.weldingInfoConfig = {
        table: weldingInfo,
        name: "WeldingInfo",
        items: [

                // add
                builder("insert", "addWeldingInfo").controller(controller => {
                        controller.path("/weldingInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteWeldingInfoById").controller(controller => {
                        controller.path("/weldingInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateWeldingInfoById").controller(controller => {
                        controller.path("/weldingInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getWeldingInfoById").controller(controller => {
                        controller.path("/weldingInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}