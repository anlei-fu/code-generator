/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageDealUser")
                                .includes(c=>{
                                        c.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageDealUserById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateDamageDealUserById")
                                .includes(c=>{
                                        c.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageDealUserById")
                                .includes(c=>{
                                        c.includes(damageDealUser.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
                                })
                                .req(req => {
                                        req.name("id")
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
                                        c.includes(damageDealUser.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDamageDealUserList")
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}