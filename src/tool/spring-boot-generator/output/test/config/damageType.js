const { damageType } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageType")
                                .includes(collection => {
                                        collection.includes(damageType.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
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
                                                .excludes("id");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageType.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageType.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDamageTypeList")
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}