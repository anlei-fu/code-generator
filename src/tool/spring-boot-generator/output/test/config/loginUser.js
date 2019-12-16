const { loginUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.loginUserConfig = {
        table: loginUser,
        name: "LoginUser",
        items: [

                // add
                builder("insert", "addLoginUser").controller(controller => {
                        controller.path("/loginUser/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteLoginUserById").controller(controller => {
                        controller.path("/loginUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateLoginUserById").controller(controller => {
                        controller.path("/loginUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getLoginUserById").controller(controller => {
                        controller.path("/loginUser/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}