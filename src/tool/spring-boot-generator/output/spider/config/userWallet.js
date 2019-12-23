const { userWallet } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userWalletConfig = {
        table: userWallet,
        name: "UserWallet",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // total : validate --- @NotNull  
                        // userId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserWallet")
                                .includes(collection => {
                                        collection.includes(userWallet.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/userWallet");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("total","@NotNull")
                                           .validate("userId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserWalletById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateUserWalletById")
                                .includes(collection => {
                                        collection.includes(userWallet.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserWalletById")
                                .includes(collection=>{
                                        collection.includes(userWallet.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList

                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userWallet.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userWallet.columnsArray)
                                                  .excludes("id")

                                })
                                .id("getUserWalletList")
                                .controller(controller => {
                                        controller.path("/userWallet");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}