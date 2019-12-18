/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { bureauLineOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bureauLineOrderConfig = {
        table: bureauLineOrder,
        name: "BureauLineOrder",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addBureauLineOrder")
                                .includes(c=>{
                                        c.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBureauLineOrderById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateBureauLineOrderById")
                                .includes(c=>{
                                        c.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getBureauLineOrderById")
                                .includes(c=>{
                                        c.includes(bureauLineOrder.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                })
                                .req(req => {
                                        req.name("id")
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
                                        c.includes(bureauLineOrder.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .id("getBureauLineOrderList")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}