/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { domainBlockRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainBlockRecordConfig = {
        table: domainBlockRecord,
        name: "DomainBlockRecord",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDomainBlockRecord")
                                .includes(c=>{
                                        c.includes(domainBlockRecord.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainBlockRecordById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("updateDomainBlockRecordById")
                                .includes(c=>{
                                        c.includes(domainBlockRecord.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("getDomainBlockRecordById")
                                .includes(c=>{
                                        c.includes(domainBlockRecord.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                        c.includes(domainBlockRecord.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(domainBlockRecord.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDomainBlockRecordList")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}