const { damageType } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
                items: [

                        // add
                        // createTime excluded 
                        // damageType : validate --- @Enum("damageType")  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageType")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
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
                        // createTime : excluded 
                        // damageType : validate --- @Enum("damageType")  
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
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
                        // createTime : expression --- timeRange
                        // damageType : validates --- @Enum("damageType")  
                        // damageType : expression --- range
                        // status : validates --- @Enum("status")
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
                                                  .exp("createTime","timeRange")
                                                  .exp("damageType","range")
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
