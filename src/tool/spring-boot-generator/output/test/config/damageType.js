const { damageType } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageType")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/damageType");
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
                                .id("deleteDamageTypeById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // damageType validate : @Enum(damageType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDamageTypeById")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("damageType","@Enum(damageType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageTypeById")
                                .includes(collection=>{
                                        collection.includes(damageType.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
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
                        // damageType validate : @Enum(damageType)  
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageType.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDamageTypeList")
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("damageType","@Enum(damageType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}