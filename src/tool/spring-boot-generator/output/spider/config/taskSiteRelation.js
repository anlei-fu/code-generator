/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { taskSiteRelation } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskSiteRelationConfig = {
        table: taskSiteRelation,
        name: "TaskSiteRelation",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTaskSiteRelation")
                                .includes(c=>{
                                        c.includes(taskSiteRelation.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTaskSiteRelationById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                                .id("updateTaskSiteRelationById")
                                .includes(c=>{
                                        c.includes(taskSiteRelation.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                                .id("getTaskSiteRelationById")
                                .includes(c=>{
                                        c.includes(taskSiteRelation.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                                        c.includes(taskSiteRelation.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(taskSiteRelation.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTaskSiteRelationList")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}