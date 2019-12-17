/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { userDeductRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userDeductRecordConfig = {
        table: userDeductRecord,
        name: "UserDeductRecord",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteUserDeductRecordById")
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateUserDeductRecordById")
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                                .id("getUserDeductRecordById")
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                                .id("getUserDeductRecordList")
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}