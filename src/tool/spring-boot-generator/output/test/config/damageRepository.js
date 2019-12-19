const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageRepository")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryByOrderDetailId")
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                         .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryByOrderDetailId")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                         .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryByOrderDetailId")
                                .includes(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("orderDetailId")
                                         .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
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
                                        collection.includes(damageRepository.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .id("getDamageRepositoryList")
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build()
                ]
}