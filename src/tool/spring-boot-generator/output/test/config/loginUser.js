const { loginUser } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.loginUserConfig = {
        table: loginUser,
        name: "LoginUser",
                items: [

                        // add
                        // id validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addLoginUser")
                                .includes(collection => {
                                        collection.includes(loginUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/loginUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
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
                        // password validate : @Password
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
                                           .excludes("id")
                                           .validate("password","@Password")
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
                        // name excluded 
                        // password validate : @Password  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(loginUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(loginUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getLoginUserList")
                                .controller(controller => {
                                        controller.path("/loginUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("password","@Password")
                                })
                                .build()
                ]
}