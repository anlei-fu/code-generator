/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDamageRepositoryDeviceById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDamageRepositoryDeviceById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{id}");
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
                                .id("getDamageRepositoryDeviceById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{id}");
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
                                .id("getDamageRepositoryDeviceList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}