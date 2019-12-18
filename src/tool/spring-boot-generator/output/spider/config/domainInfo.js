/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { domainInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainInfoConfig = {
        table: domainInfo,
        name: "DomainInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDomainInfo")
                                .includes(c=>{
                                        c.includes(domainInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
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
                                .id("updateDomainInfoById")
                                .includes(c=>{
                                        c.includes(domainInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
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
                                .id("getDomainInfoById")
                                .includes(c=>{
                                        c.includes(domainInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainInfo/{id}");
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
                                        c.includes(domainInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(domainInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDomainInfoList")
                                .controller(controller => {
                                        controller.path("/domainInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}