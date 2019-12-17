/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { siteInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.siteInfoConfig = {
        table: siteInfo,
        name: "SiteInfo",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteSiteInfoById")
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateSiteInfoById")
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
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
                                .id("getSiteInfoById")
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
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
                                .id("getSiteInfoList")
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}