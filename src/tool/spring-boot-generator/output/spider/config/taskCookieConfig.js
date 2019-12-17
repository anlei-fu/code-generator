/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { taskCookieConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskCookieConfigConfig = {
        table: taskCookieConfig,
        name: "TaskCookieConfig",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteTaskCookieConfigById")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateTaskCookieConfigById")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
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
                                .id("getTaskCookieConfigById")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
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
                                .id("getTaskCookieConfigList")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}