const { damageType } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
                items: [

                        // add
                        // id excluded 
                        // damageType : validate --- @Enum("damageType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDamageType")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageTypeById")
                                .alias("t")
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
                        // damageType : validate --- @Enum("damageType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDamageTypeById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageTypeById")
                                .alias("t")
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
                        // damageType : validates --- @Enum("damageType")  
                        // damageType : expression --- range
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDamageTypeList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageType.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .exp("damageType","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
