const { damageOrder } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.damageOrderConfig = {
        table: damageOrder,
        name: "DamageOrder",
                items: [

                        // add
                        // orderNo validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageOrder")
                                .includes(collection => {
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/damageOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderNo")
                                           .validate("orderNo","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageOrderByOrderNo")
                                .conditions(collection => {
                                        collection.includes("orderNo")
                                                  .require("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateDamageOrderByOrderNo")
                                .includes(collection => {
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")

                                })
                                .conditions(collection => {
                                        collection.includes("orderNo")
                                                  .require("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderNo")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageOrderByOrderNo")
                                .includes(collection=>{
                                        collection.includes(damageOrder.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("orderNo")
                                                  .require("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageOrder.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDamageOrderList")
                                .controller(controller => {
                                        controller.path("/damageOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderNo")

                                })
                                .build()
                ]
}