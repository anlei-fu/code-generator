/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { worshopBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.worshopBoundaryInfoConfig = {
        table: worshopBoundaryInfo,
        name: "WorshopBoundaryInfo",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteWorshopBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateWorshopBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("getWorshopBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("getWorshopBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}