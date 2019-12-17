/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [
                        
                        // add
                        builder()
                                .type("insert")
                                .id("add")
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                }),

                        // deleteById
                        builder()
                                .type("delete")
                                .id("deleteDamageDealUserById")
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                }).req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                }),

                        // updateById
                        builder()
                                .type("update")
                                .id("updateDamageDealUserById")
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                                .id("getDamageDealUserById")
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                                .id("getDamageDealUserList")
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                ]
}