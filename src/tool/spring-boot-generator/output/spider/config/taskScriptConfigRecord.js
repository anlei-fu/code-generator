/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskScriptConfigRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskScriptConfigRecordConfig = {
        table: taskScriptConfigRecord,
        name: "TaskScriptConfigRecord",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskScriptConfigRecord")
                                .includes(c=>{
                                        c.includes(taskScriptConfigRecord.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskScriptConfigRecordById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("updateTaskScriptConfigRecordById")
                                .includes(c=>{
                                        c.includes(taskScriptConfigRecord.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                .id("getTaskScriptConfigRecordById")
                                .includes(c=>{
                                        c.includes(taskScriptConfigRecord.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord/{id}");
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
                                        c.includes(taskScriptConfigRecord.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskScriptConfigRecord.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskScriptConfigRecordList")
                                .controller(controller => {
                                        controller.path("/taskScriptConfigRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}