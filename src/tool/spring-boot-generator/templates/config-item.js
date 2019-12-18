/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { @sname } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.@snameConfig = {
        table: @sname,
        name: "@name",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("add@name")
                                .includes(c=>{
                                        c.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("delete@nameBy@key")
                                .conditions(c =>{
                                        c.includes("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("update@nameBy@key")
                                .includes(c=>{
                                        c.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .conditions(c =>{
                                        c.includes("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("get@nameBy@key")
                                .includes(c=>{
                                        c.includes(@sname.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
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
                                        c.includes(@sname.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .id("get@nameList")
                                .controller(controller => {
                                        controller.path("/@sname");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build()
                ]
}