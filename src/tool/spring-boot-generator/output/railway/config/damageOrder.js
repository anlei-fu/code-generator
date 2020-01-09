const { damageOrder } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageOrderConfig = {
        table: damageOrder,
        name: "DamageOrder",
                items: [

                        // add
                        // createTime excluded 
                        // isDelete : validate --- @NotNull  
                        // orderNo excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageOrder")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")
                                                  .excludes(["createTime","orderNo","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderNo")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageOrderByOrderNo")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("orderNo")
                                                  .require("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDamageOrderByOrderNo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")
                                                  .excludes(["createTime","updateTime"])

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
                                           .type("String")
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
                                .alias("t")
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
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getDamageOrderList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageOrder.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageOrder.columnsArray)
                                                  .excludes("orderNo")
                                                  .exp("createTime","timeRange")
                                })
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
