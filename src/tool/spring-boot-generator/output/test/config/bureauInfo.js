const { bureauInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bureauInfoConfig = {
        table: bureauInfo,
        name: "BureauInfo",
        items: [

                // add
                builder("insert", "addBureauInfo").controller(controller => {
                        controller.path("/bureauInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteBureauInfoById").controller(controller => {
                        controller.path("/bureauInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateBureauInfoById").controller(controller => {
                        controller.path("/bureauInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getBureauInfoById").controller(controller => {
                        controller.path("/bureauInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}