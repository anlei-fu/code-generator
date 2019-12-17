/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { detectGoupUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectGoupUserConfig = {
        table: detectGoupUser,
        name: "DetectGoupUser",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDetectGoupUserById")
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDetectGoupUserById")
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
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
                                .id("getDetectGoupUserById")
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
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
                                .id("getDetectGoupUserList")
                                .controller(controller => {
                                        controller.path("/detectGoupUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}