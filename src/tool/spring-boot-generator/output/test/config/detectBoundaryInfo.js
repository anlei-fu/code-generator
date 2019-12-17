/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDetectBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDetectBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                .id("getDetectBoundaryInfoById")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                .id("getDetectBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}