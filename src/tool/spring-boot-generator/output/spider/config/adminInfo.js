const { adminInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.adminInfoConfig = {
        table: adminInfo,
        name: "AdminInfo",
                items: [

                        // add
                        // id excluded 
                        // account : validate --- @NotNull  
                        // password : validate --- @NotNull  @Password  
                        // level : validate --- @Enum("level")
                        new builder()
                                .type("insert")
                                .id("addAdminInfo")
                                .includes(collection => {
                                        collection.includes(adminInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("account","@NotNull")
                                           .validate("password","@NotNull")
                                           .validate("password","@Password")
                                           .validate("level","@Enum(\"level\")")
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
                        // password : validate --- @Password  
                        // level : validate --- @Enum("level")
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
                                           .validate("password","@Password")
                                           .validate("level","@Enum(\"level\")")
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
                        // password : excluded 
                        // level : validates --- @Enum("level")
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
                                           .validate("level","@Enum(\"level\")")
                                })
                                .build()
                ]
}