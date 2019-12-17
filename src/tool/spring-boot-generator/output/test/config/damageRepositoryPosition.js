/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDamageRepositoryPositionById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDamageRepositoryPositionById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{id}");
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
                                .id("getDamageRepositoryPositionById")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{id}");
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
                                .id("getDamageRepositoryPositionList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}