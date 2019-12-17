/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { taskSiteRelation } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.taskSiteRelationConfig = {
        table: taskSiteRelation,
        name: "TaskSiteRelation",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteTaskSiteRelationById")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateTaskSiteRelationById")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                                .id("getTaskSiteRelationById")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation/{id}");
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
                                .id("getTaskSiteRelationList")
                                .controller(controller => {
                                        controller.path("/taskSiteRelation");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}