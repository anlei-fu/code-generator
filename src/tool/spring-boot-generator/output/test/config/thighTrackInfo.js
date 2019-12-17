/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteThighTrackInfoById")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateThighTrackInfoById")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                                .id("getThighTrackInfoById")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                                .id("getThighTrackInfoList")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}