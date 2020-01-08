const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [

                        // add
                        // id excluded 
                        // gender : validate --- @Enum("gender")  
                        // dealType : validate --- @Enum("dealType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDamageDealUser")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageDealUserById")
                                .alias("t")
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
                        // gender : validate --- @Enum("gender")  
                        // dealType : validate --- @Enum("dealType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDamageDealUserById")
                                .alias("t")
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
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageDealUserById")
                                .alias("t")
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
                        // name : excluded 
                        // gender : validates --- @Enum("gender")  
                        // dealType : validates --- @Enum("dealType")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDamageDealUserList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("dealType","@Enum(\"dealType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
