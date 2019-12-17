/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { trackDivisionInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteTrackDivisionInfoById")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateTrackDivisionInfoById")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("getTrackDivisionInfoById")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("getTrackDivisionInfoList")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}