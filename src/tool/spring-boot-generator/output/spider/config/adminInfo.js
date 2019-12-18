/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { adminInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.adminInfoConfig = {
        table: adminInfo,
        name: "AdminInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addAdminInfo")
                                .includes(c=>{
                                        c.includes(adminInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteAdminInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
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
                                .id("updateAdminInfoById")
                                .includes(c=>{
                                        c.includes(adminInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
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
                                .id("getAdminInfoById")
                                .includes(c=>{
                                        c.includes(adminInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/adminInfo/{id}");
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
                                        c.includes(adminInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(adminInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getAdminInfoList")
                                .controller(controller => {
                                        controller.path("/adminInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}