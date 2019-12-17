/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { sysSystemDictionary } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.sysSystemDictionaryConfig = {
        table: sysSystemDictionary,
        name: "SysSystemDictionary",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteSysSystemDictionaryById")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateSysSystemDictionaryById")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{id}");
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
                                .id("getSysSystemDictionaryById")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{id}");
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
                                .id("getSysSystemDictionaryList")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}