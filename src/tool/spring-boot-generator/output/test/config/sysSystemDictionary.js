/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { sysSystemDictionary } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.sysSystemDictionaryConfig = {
        table: sysSystemDictionary,
        name: "SysSystemDictionary",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addSysSystemDictionary")
                                .includes(c=>{
                                        c.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSysSystemDictionaryByDicid")
                                .conditions(c =>{
                                        c.includes("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateSysSystemDictionaryByDicid")
                                .includes(c=>{
                                        c.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .conditions(c =>{
                                        c.includes("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSysSystemDictionaryByDicid")
                                .includes(c=>{
                                        c.includes(sysSystemDictionary.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        new builder()
                                .type("select")
                                .includes(c=>{
                                        c.includes(sysSystemDictionary.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .id("getSysSystemDictionaryList")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build()
                ]
}