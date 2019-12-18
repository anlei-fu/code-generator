/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskInfoConfig = {
        table: taskInfo,
        name: "TaskInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskInfo")
                                .includes(c=>{
                                        c.includes(taskInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
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
                                .id("updateTaskInfoById")
                                .includes(c=>{
                                        c.includes(taskInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
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
                                .id("getTaskInfoById")
                                .includes(c=>{
                                        c.includes(taskInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskInfo/{id}");
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
                                        c.includes(taskInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskInfoList")
                                .controller(controller => {
                                        controller.path("/taskInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}