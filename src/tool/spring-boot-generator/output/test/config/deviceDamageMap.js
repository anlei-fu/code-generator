/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { deviceDamageMap } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.deviceDamageMapConfig = {
        table: deviceDamageMap,
        name: "DeviceDamageMap",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDeviceDamageMapById")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDeviceDamageMapById")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                                .id("getDeviceDamageMapById")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                                .id("getDeviceDamageMapList")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}