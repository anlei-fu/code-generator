const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
                items: [

                        // add
                        // auditStatus : validate --- @Enum("auditStatus")  
                        // createTime excluded 
                        // damageLevel : validate --- @Enum("damageLevel")  
                        // damageType : validate --- @Enum("damageType")  
                        // dealStatus : validate --- @Enum("dealStatus")  
                        // importStatus : validate --- @Enum("importStatus")  
                        // isDelete : validate --- @NotNull  
                        // orderDetailId excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageRepository")
                                .includes(collection => {
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","orderDetailId","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                           .validate("damageLevel","@Enum(\"damageLevel\")")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
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
                        // auditStatus : validate --- @Enum("auditStatus")  
                        // createTime : excluded 
                        // damageLevel : validate --- @Enum("damageLevel")  
                        // damageType : validate --- @Enum("damageType")  
                        // dealStatus : validate --- @Enum("dealStatus")  
                        // importStatus : validate --- @Enum("importStatus")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryByOrderDetailId")
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
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                           .validate("damageLevel","@Enum(\"damageLevel\")")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
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
                        // auditStatus : validates --- @Enum("auditStatus")  
                        // createTime : expression --- timeRange
                        // damageDetail : excluded 
                        // damageLevel : validates --- @Enum("damageLevel")  
                        // damageLevel : expression --- range
                        // damageOld : expression --- range
                        // damageOldId : expression --- range
                        // damageType : validates --- @Enum("damageType")  
                        // damageType : expression --- range
                        // dealStatus : validates --- @Enum("dealStatus")  
                        // detectTime : expression --- timeRange
                        // importStatus : validates --- @Enum("importStatus")  
                        // lastDetectTime : expression --- timeRange
                        // remark : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepository.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["damageDetail","remark"])
                                                  .exp("createTime","timeRange")
                                                  .exp("damageLevel","range")
                                                  .exp("damageOld","range")
                                                  .exp("damageOldId","range")
                                                  .exp("damageType","range")
                                                  .exp("detectTime","timeRange")
                                                  .exp("lastDetectTime","timeRange")
                                })
                                .id("getDamageRepositoryList")
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("auditStatus","@Enum(\"auditStatus\")")
                                           .validate("damageLevel","@Enum(\"damageLevel\")")
                                           .validate("damageType","@Enum(\"damageType\")")
                                           .validate("dealStatus","@Enum(\"dealStatus\")")
                                           .validate("importStatus","@Enum(\"importStatus\")")
                                })
                                .build()
                ]
}