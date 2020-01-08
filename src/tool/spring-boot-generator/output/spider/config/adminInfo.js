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
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteAdminInfoByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),
                                
                        // updateById
                        // password : validate --- @Password  
                        // level : validate --- @Enum("level")
                        new builder()
                                .type("update")
                                .id("updateAdminInfoByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getAdminInfoByUserAndId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })
                                .build(),

                        // getList
                        // password : excluded 
                        // level : validates --- @Enum("level")
                        new builder()
                                .type("select")
                                .id("getAdminInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(adminInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(adminInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["password"])
                                })
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
