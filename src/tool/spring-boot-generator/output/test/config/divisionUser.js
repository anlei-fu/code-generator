const { divisionUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.divisionUserConfig = {
        table: divisionUser,
        name: "DivisionUser",
        items: [

                // add
                builder("insert", "addDivisionUser").controller(controller => {
                        controller.path("/divisionUser/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteDivisionUserById").controller(controller => {
                        controller.path("/divisionUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateDivisionUserById").controller(controller => {
                        controller.path("/divisionUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getDivisionUserById").controller(controller => {
                        controller.path("/divisionUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}