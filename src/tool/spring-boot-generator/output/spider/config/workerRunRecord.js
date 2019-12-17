/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { workerRunRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerRunRecordConfig = {
        table: workerRunRecord,
        name: "WorkerRunRecord",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteWorkerRunRecordById")
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateWorkerRunRecordById")
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
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
                                .id("getWorkerRunRecordById")
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
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
                                .id("getWorkerRunRecordList")
                                .controller(controller => {
                                        controller.path("/workerRunRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}