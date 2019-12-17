/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { taskHttpHeaderConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskHttpHeaderConfigConfig = {
        table: taskHttpHeaderConfig,
        name: "TaskHttpHeaderConfig",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteTaskHttpHeaderConfigById")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateTaskHttpHeaderConfigById")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("getTaskHttpHeaderConfigById")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("getTaskHttpHeaderConfigList")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}