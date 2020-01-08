const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
                items: [

                        // add
                        // orderDetailId excluded 
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryPosition")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["orderDetailId","createTime","updateTime"])
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
                                .alias("t")
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
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryPositionByOrderDetailId")
                                .alias("t")
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
                                .alias("t")
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
                        // lineName : excluded 
                        // damagePosition : expression --- range
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryPositionList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryPosition.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["lineName"])
                                                  .exp("damagePosition","range")
                                                  .exp("createTime","timeRange")
                                })
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
