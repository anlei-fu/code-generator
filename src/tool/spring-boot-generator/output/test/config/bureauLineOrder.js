const { bureauLineOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bureauLineOrderConfig = {
        table: bureauLineOrder,
        name: "BureauLineOrder",
        items: [

                // add
                builder("insert", "addBureauLineOrder").controller(controller => {
                        controller.path("/bureauLineOrder/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteBureauLineOrderById").controller(controller => {
                        controller.path("/bureauLineOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateBureauLineOrderById").controller(controller => {
                        controller.path("/bureauLineOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getBureauLineOrderById").controller(controller => {
                        controller.path("/bureauLineOrder/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}