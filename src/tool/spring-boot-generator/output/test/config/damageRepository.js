const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
                items: [

                        // add
                        // orderDetailId validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageRepository")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("orderDetailId","@NotNull")
                                           .validate("isDelete","@NotNull")
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
                        // damageType validate : @Enum(damageType)  
                        // damageLevel validate : @Enum(damageLevel)  
                        // dealStatus validate : @Enum(dealStatus)  
                        // importStatus validate : @Enum(importStatus)  
                        // auditStatus validate : @Enum(auditStatus)
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
                                           .excludes("orderDetailId")
                                           .validate("damageType","@Enum(damageType)")
                                           .validate("damageLevel","@Enum(damageLevel)")
                                           .validate("dealStatus","@Enum(dealStatus)")
                                           .validate("importStatus","@Enum(importStatus)")
                                           .validate("auditStatus","@Enum(auditStatus)")
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
                        // detectTime expression : timeRange
                        // damageType validate : @Enum(damageType)  
                        // damageLevel validate : @Enum(damageLevel)  
                        // damageDetail excluded 
                        // remark excluded 
                        // dealStatus validate : @Enum(dealStatus)  
                        // importStatus validate : @Enum(importStatus)  
                        // createTime expression : timeRange
                        // auditStatus validate : @Enum(auditStatus)
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["damageDetail","remark"])
                                                  .expression("detectTime","timeRange")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDamageRepositoryList")
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("damageType","@Enum(damageType)")
                                           .validate("damageLevel","@Enum(damageLevel)")
                                           .validate("dealStatus","@Enum(dealStatus)")
                                           .validate("importStatus","@Enum(importStatus)")
                                           .validate("auditStatus","@Enum(auditStatus)")
                                })
                                .build()
                ]
}