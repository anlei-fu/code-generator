const { user } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userConfig = {
        table: user,
        name: "User",
        items: [

                // add
                builder("insert", "addUser").controller(controller => {
                        controller.path("/user/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteUserById").controller(controller => {
                        controller.path("/user/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateUserById").controller(controller => {
                        controller.path("/user/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getUserById").controller(controller => {
                        controller.path("/user/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}