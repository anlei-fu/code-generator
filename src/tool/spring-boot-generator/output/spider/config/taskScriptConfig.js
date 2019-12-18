/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskScriptConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskScriptConfigConfig = {
        table: taskScriptConfig,
        name: "TaskScriptConfig",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskScriptConfig")
                                .includes(c=>{
                                        c.includes(taskScriptConfig.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskScriptConfigById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
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
                                .id("updateTaskScriptConfigById")
                                .includes(c=>{
                                        c.includes(taskScriptConfig.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
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
                                .id("getTaskScriptConfigById")
                                .includes(c=>{
                                        c.includes(taskScriptConfig.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfig/{id}");
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
                                        c.includes(taskScriptConfig.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskScriptConfig.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskScriptConfigList")
                                .controller(controller => {
                                        controller.path("/taskScriptConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}