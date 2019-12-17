/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { taskScriptConfigRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskScriptConfigRecordConfig = {
        table: taskScriptConfigRecord,
        name: "TaskScriptConfigRecord",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteTaskScriptConfigRecordById")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateTaskScriptConfigRecordById")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("getTaskScriptConfigRecordById")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("getTaskScriptConfigRecordList")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}