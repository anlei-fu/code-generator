/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageOrderConfig = {
        table: damageOrder,
        name: "DamageOrder",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageOrder")
                                .includes(c=>{
                                        c.includes(damageOrder.columnsArray)
                                         .excludes("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderNo");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageOrderByOrderNo")
                                .conditions(c =>{
                                        c.includes("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateDamageOrderByOrderNo")
                                .includes(c=>{
                                        c.includes(damageOrder.columnsArray)
                                         .excludes("orderNo")
                                })
                                .conditions(c =>{
                                        c.includes("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderNo");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageOrderByOrderNo")
                                .includes(c=>{
                                        c.includes(damageOrder.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("orderNo")
                                })
                                .controller(controller => {
                                        controller.path("/damageOrder/{orderNo}");
                                })
                                .req(req => {
                                        req.name("orderNo")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        new builder()
                                .type("select")
                                .includes(c=>{
                                        c.includes(damageOrder.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageOrder.columnsArray)
                                         .excludes("orderNo")
                                })
                                .id("getDamageOrderList")
                                .controller(controller => {
                                        controller.path("/damageOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderNo");
                                })
                                .build()
                ]
}