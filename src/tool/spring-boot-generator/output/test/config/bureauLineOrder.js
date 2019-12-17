/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { bureauLineOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bureauLineOrderConfig = {
        table: bureauLineOrder,
        name: "BureauLineOrder",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteBureauLineOrderById")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateBureauLineOrderById")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // getById
                        builder()
                                .type("selete")
                                .id("getBureauLineOrderById")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }).resp(resp => {
                                        resp.single();
                                }),

                        // getList
                        builder()
                                .type("selete")
                                .id("getBureauLineOrderList")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}