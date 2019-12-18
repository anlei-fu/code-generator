/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageRepositoryPosition } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryPositionConfig = {
        table: damageRepositoryPosition,
        name: "DamageRepositoryPosition",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryPosition")
                                .includes(c=>{
                                        c.includes(damageRepositoryPosition.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryPositionByOrderDetailId")
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryPositionByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepositoryPosition.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryPositionByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
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
                                        c.includes(damageRepositoryPosition.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageRepositoryPosition.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .id("getDamageRepositoryPositionList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryPosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build()
                ]
}