const { userInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userInfoConfig = {
        table: userInfo,
        name: "UserInfo",
        items: [

                // add
                builder("insert", "addUserInfo").controller(controller => {
                        controller.path("/userInfo/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteUserInfoById").controller(controller => {
                        controller.path("/userInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateUserInfoById").controller(controller => {
                        controller.path("/userInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getUserInfoById").controller(controller => {
                        controller.path("/userInfo/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}