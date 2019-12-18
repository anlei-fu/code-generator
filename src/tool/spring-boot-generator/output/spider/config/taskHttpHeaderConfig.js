/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskHttpHeaderConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskHttpHeaderConfigConfig = {
        table: taskHttpHeaderConfig,
        name: "TaskHttpHeaderConfig",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskHttpHeaderConfig")
                                .includes(c=>{
                                        c.includes(taskHttpHeaderConfig.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskHttpHeaderConfigById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("updateTaskHttpHeaderConfigById")
                                .includes(c=>{
                                        c.includes(taskHttpHeaderConfig.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                .id("getTaskHttpHeaderConfigById")
                                .includes(c=>{
                                        c.includes(taskHttpHeaderConfig.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig/{id}");
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
                                        c.includes(taskHttpHeaderConfig.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskHttpHeaderConfig.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskHttpHeaderConfigList")
                                .controller(controller => {
                                        controller.path("/taskHttpHeaderConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}