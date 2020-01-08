const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [

                        // add
                        // createTime excluded 
                        // dealType : validate --- @Enum("dealType")  
                        // gender : validate --- @Enum("gender")  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageDealUser")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageDealUserById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // createTime : excluded 
                        // dealType : validate --- @Enum("dealType")  
                        // gender : validate --- @Enum("gender")  
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDamageDealUserById")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageDealUserById")
                                .includes(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                        // createTime : expression --- timeRange
                        // dealType : validates --- @Enum("dealType")  
                        // gender : validates --- @Enum("gender")  
                        // name : excluded 
                        // remark : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getDamageDealUserList")
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}