/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { workerRunRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerRunRecordConfig = {
        table: workerRunRecord,
        name: "WorkerRunRecord",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWorkerRunRecord")
                                .includes(c=>{
                                        c.includes(workerRunRecord.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkerRunRecordById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
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
                                .id("updateWorkerRunRecordById")
                                .includes(c=>{
                                        c.includes(workerRunRecord.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
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
                                .id("getWorkerRunRecordById")
                                .includes(c=>{
                                        c.includes(workerRunRecord.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerRunRecord/{id}");
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
                                        c.includes(workerRunRecord.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(workerRunRecord.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWorkerRunRecordList")
                                .controller(controller => {
                                        controller.path("/workerRunRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}