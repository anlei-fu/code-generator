const { detectGoupUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectGoupUserConfig = {
        table: detectGoupUser,
        name: "DetectGoupUser",
        items: [

                // add
                builder("insert", "addDetectGoupUser").controller(controller => {
                        controller.path("/detectGoupUser/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDetectGoupUserById").controller(controller => {
                        controller.path("/detectGoupUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDetectGoupUserById").controller(controller => {
                        controller.path("/detectGoupUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDetectGoupUserById").controller(controller => {
                        controller.path("/detectGoupUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}