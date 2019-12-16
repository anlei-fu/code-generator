const { detectGroup } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectGroupConfig = {
        table: detectGroup,
        name: "DetectGroup",
        items: [

                // add
                builder("insert", "addDetectGroup").controller(controller => {
                        controller.path("/detectGroup/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectGroupById").controller(controller => {
                        controller.path("/detectGroup/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectGroupById").controller(controller => {
                        controller.path("/detectGroup/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectGroupById").controller(controller => {
                        controller.path("/detectGroup/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}