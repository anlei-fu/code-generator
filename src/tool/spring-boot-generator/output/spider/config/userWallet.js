const { userWallet } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userWalletConfig = {
        table: userWallet,
        name: "UserWallet",
                items: [

                        // add
                        // id excluded 
                        // userId : validate --- @NotNull  
                        // total : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserWallet")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userWallet.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/userWallet");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("userId","@NotNull")
                                           .validate("total","@NotNull")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserWalletByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),
                                
                        // updateById
                        new builder()
                                .type("update")
                                .id("updateUserWalletByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserWalletByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getList
                        // total : expression --- range
                        new builder()
                                .type("select")
                                .id("getUserWalletList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userWallet.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userWallet.columnsArray)
                                                  .excludes("id")
                                                  .exp("total","range")
                                })
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
