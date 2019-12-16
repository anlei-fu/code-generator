const { userWallet } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userWalletConfig = {
        table: userWallet,
        name: "UserWallet",
        items: [

                // add
                builder("insert", "addUserWallet").controller(controller => {
                        controller.path("/userWallet/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteUserWalletById").controller(controller => {
                        controller.path("/userWallet/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateUserWalletById").controller(controller => {
                        controller.path("/userWallet/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getUserWalletById").controller(controller => {
                        controller.path("/userWallet/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}