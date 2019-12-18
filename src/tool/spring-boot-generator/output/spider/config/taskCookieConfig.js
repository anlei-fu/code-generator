/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskCookieConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskCookieConfigConfig = {
        table: taskCookieConfig,
        name: "TaskCookieConfig",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskCookieConfig")
                                .includes(c=>{
                                        c.includes(taskCookieConfig.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskCookieConfigById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateTaskCookieConfigById")
                                .includes(c=>{
                                        c.includes(taskCookieConfig.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTaskCookieConfigById")
                                .includes(c=>{
                                        c.includes(taskCookieConfig.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskCookieConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        new builder()
                                .type("select")
                                .includes(c=>{
                                        c.includes(taskCookieConfig.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskCookieConfig.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskCookieConfigList")
                                .controller(controller => {
                                        controller.path("/taskCookieConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}