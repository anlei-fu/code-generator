const { adminInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.adminInfoConfig = {
        table: adminInfo,
        name: "AdminInfo",
                items: [

                        // add
                        // account : validate --- @NotNull  
                        // id : validate --- @NotNull  
                        // password : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addAdminInfo")
                                .includes(collection => {
                                        collection.includes(adminInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/adminInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("account","@NotNull")
                                           .validate("id","@NotNull")
                                           .validate("password","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteAdminInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // level : validate --- @Enum(level)  
                        // password : validate --- @Password
                        new builder()
                                .type("update")
                                .id("updateAdminInfoById")
                                .includes(collection => {
                                        collection.includes(adminInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(level)")
                                           .validate("password","@Password")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getAdminInfoById")
                                .includes(collection=>{
                                        collection.includes(adminInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
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
                        // level : validates --- @Enum(level)  
                        // password : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(adminInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(adminInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["password"])
                                })
                                .id("getAdminInfoList")
                                .controller(controller => {
                                        controller.path("/adminInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("level","@Enum(level)")
                                })
                                .build()
                ]
}