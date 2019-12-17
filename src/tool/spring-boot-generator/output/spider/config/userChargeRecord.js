/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { userChargeRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userChargeRecordConfig = {
        table: userChargeRecord,
        name: "UserChargeRecord",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteUserChargeRecordById")
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateUserChargeRecordById")
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
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
                                .id("getUserChargeRecordById")
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
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
                                .id("getUserChargeRecordList")
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}