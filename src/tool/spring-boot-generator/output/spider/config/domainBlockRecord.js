/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { domainBlockRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.domainBlockRecordConfig = {
        table: domainBlockRecord,
        name: "DomainBlockRecord",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDomainBlockRecordById")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDomainBlockRecordById")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("getDomainBlockRecordById")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord/{id}");
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
                                .id("getDomainBlockRecordList")
                                .controller(controller => {
                                        controller.path("/domainBlockRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}