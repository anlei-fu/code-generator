/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { domainModel } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainModelConfig = {
        table: domainModel,
        name: "DomainModel",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDomainModel")
                                .includes(c=>{
                                        c.includes(domainModel.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainModelById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
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
                                .id("updateDomainModelById")
                                .includes(c=>{
                                        c.includes(domainModel.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
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
                                .id("getDomainModelById")
                                .includes(c=>{
                                        c.includes(domainModel.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
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
                                        c.includes(domainModel.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(domainModel.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDomainModelList")
                                .controller(controller => {
                                        controller.path("/domainModel");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}