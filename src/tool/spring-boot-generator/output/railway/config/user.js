const { user } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userConfig = {
        table: user,
        name: "User",
                items: [

                        // add
                        // id excluded@@
                        new builder()
                                .type("insert")
                                .id("addUser")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(user.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/user");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/user/{id}");
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
                                .id("updateUserById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(user.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/user/{id}");
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
                                .id("getUserById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(user.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/user/{id}");
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
                        // name : excluded@@
                        new builder()
                                .type("select")
                                .id("getUserList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(user.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(user.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name"])
                                })
                                .controller(controller => {
                                        controller.path("/user");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
