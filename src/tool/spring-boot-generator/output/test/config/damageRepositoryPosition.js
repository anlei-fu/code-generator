const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
                items: [

                        // add
                        // orderDetailId validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryPosition")
                                .includes(collection => {
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("orderDetailId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryPositionByOrderDetailId")
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
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
                                .id("updateDamageRepositoryPositionByOrderDetailId")
                                .includes(collection => {
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")

                                })
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryPositionByOrderDetailId")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
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
                        // lineName excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["lineName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDamageRepositoryPositionList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")

                                })
                                .build()
                ]
}