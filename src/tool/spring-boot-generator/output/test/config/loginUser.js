const { loginUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.loginUserConfig = {
        table: loginUser,
        name: "LoginUser",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addLoginUser")
                                .includes(collection => {
                                        collection.includes(loginUser.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/loginUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteLoginUserById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/loginUser/{id}");
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
                                .id("updateLoginUserById")
                                .includes(collection => {
                                        collection.includes(loginUser.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/loginUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getLoginUserById")
                                .includes(collection=>{
                                        collection.includes(loginUser.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/loginUser/{id}");
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
                                        collection.includes(loginUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(loginUser.columnsArray)
                                         .excludes("id")
                                })
                                .id("getLoginUserList")
                                .controller(controller => {
                                        controller.path("/loginUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}