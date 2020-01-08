const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
                items: [

                        // add
                        // orderDetailId excluded 
                        // damageType : validate --- @Enum("damageType")  
                        // dealStatus : validate --- @Enum("dealStatus")  
                        // importStatus : validate --- @Enum("importStatus")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded 
                        // auditStatus : validate --- @Enum("auditStatus")@@
                        new builder()
                                .type("insert")
                                .id("addDamageRepository")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["orderDetailId","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
                                           .validate("isDelete","@NotNull")
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryByUserAndOrderDetailId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),
                                
                        // updateById
                        // damageType : validate --- @Enum("damageType")  
                        // dealStatus : validate --- @Enum("dealStatus")  
                        // importStatus : validate --- @Enum("importStatus")  
                        // createTime : excluded 
                        // updateTime : excluded 
                        // auditStatus : validate --- @Enum("auditStatus")@@
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryByUserAndOrderDetailId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryByUserAndOrderDetailId")
                                .alias("t")
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
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // getList
                        // detectTime : expression --- timeRange
                        // damageType : validates --- @Enum("damageType")  
                        // damageType : expression --- range
                        // damageLeve : expression --- range
                        // damageDetail : excluded 
                        // damageOld : expression --- range
                        // damageOldId : expression --- range
                        // remark : excluded 
                        // dealStatus : validates --- @Enum("dealStatus")  
                        // importStatus : validates --- @Enum("importStatus")  
                        // createTime : expression --- timeRange
                        // auditStatus : validates --- @Enum("auditStatus")@@
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["damageDetail","remark"])
                                                  .exp("detectTime","timeRange")
                                                  .exp("damageType","range")
                                                  .exp("damageLeve","range")
                                                  .exp("damageOld","range")
                                                  .exp("damageOldId","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                })
                                .build()
                ]
}
