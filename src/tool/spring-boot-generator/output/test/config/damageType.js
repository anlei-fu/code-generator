/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageType } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageTypeConfig = {
        table: damageType,
        name: "DamageType",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageType")
                                .includes(c=>{
                                        c.includes(damageType.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageTypeById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
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
                                .id("updateDamageTypeById")
                                .includes(c=>{
                                        c.includes(damageType.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
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
                                .id("getDamageTypeById")
                                .includes(c=>{
                                        c.includes(damageType.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageType/{id}");
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
                                        c.includes(damageType.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageType.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDamageTypeList")
                                .controller(controller => {
                                        controller.path("/damageType");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}