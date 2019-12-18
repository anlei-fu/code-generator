/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskMainConfig } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskMainConfigConfig = {
        table: taskMainConfig,
        name: "TaskMainConfig",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskMainConfig")
                                .includes(c=>{
                                        c.includes(taskMainConfig.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskMainConfigById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                .id("updateTaskMainConfigById")
                                .includes(c=>{
                                        c.includes(taskMainConfig.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                .id("getTaskMainConfigById")
                                .includes(c=>{
                                        c.includes(taskMainConfig.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskMainConfig/{id}");
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
                                        c.includes(taskMainConfig.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskMainConfig.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskMainConfigList")
                                .controller(controller => {
                                        controller.path("/taskMainConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}