const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageDealUser")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")
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
                        // gender validate : @Enum(gender)  
                        // dealType validate : @Enum(dealType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDamageDealUserById")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")

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
                                           .validate("gender","@Enum(gender)")
                                           .validate("dealType","@Enum(dealType)")
                                           .validate("status","@Enum(status)")
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
                        // name excluded 
                        // gender validate : @Enum(gender)  
                        // dealType validate : @Enum(dealType)  
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDamageDealUserList")
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(gender)")
                                           .validate("dealType","@Enum(dealType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}