/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { workerInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workerInfoConfig = {
        table: workerInfo,
        name: "WorkerInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWorkerInfo")
                                .includes(c=>{
                                        c.includes(workerInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkerInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
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
                                .id("updateWorkerInfoById")
                                .includes(c=>{
                                        c.includes(workerInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
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
                                .id("getWorkerInfoById")
                                .includes(c=>{
                                        c.includes(workerInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workerInfo/{id}");
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
                                        c.includes(workerInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(workerInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWorkerInfoList")
                                .controller(controller => {
                                        controller.path("/workerInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}