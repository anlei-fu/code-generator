/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDetectStaffInfoCopyById")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDetectStaffInfoCopyById")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("getDetectStaffInfoCopyById")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("getDetectStaffInfoCopyList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}