const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
                items: [

                        // add
                        // createTime excluded 
                        // orderDetailId excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryPosition")
                                .includes(collection => {
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","orderDetailId","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")

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
                        // createTime : excluded 
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryPositionByOrderDetailId")
                                .includes(collection => {
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","updateTime"])

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
                        // createTime : expression --- timeRange
                        // damagePosition : expression --- range
                        // lineName : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["lineName"])
                                                  .exp("createTime","timeRange")
                                                  .exp("damagePosition","range")
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