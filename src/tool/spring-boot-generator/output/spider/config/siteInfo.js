/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { siteInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.siteInfoConfig = {
        table: siteInfo,
        name: "SiteInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addSiteInfo")
                                .includes(c=>{
                                        c.includes(siteInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSiteInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
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
                                .id("updateSiteInfoById")
                                .includes(c=>{
                                        c.includes(siteInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
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
                                .id("getSiteInfoById")
                                .includes(c=>{
                                        c.includes(siteInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/siteInfo/{id}");
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
                                        c.includes(siteInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(siteInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getSiteInfoList")
                                .controller(controller => {
                                        controller.path("/siteInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}