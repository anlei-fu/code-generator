/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageRepository } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryConfig = {
        table: damageRepository,
        name: "DamageRepository",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageRepository")
                                .includes(c=>{
                                        c.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryByOrderDetailId")
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
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
                                .id("updateDamageRepositoryByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
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
                                .id("getDamageRepositoryByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepository.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepository/{orderDetailId}");
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
                                        c.includes(damageRepository.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageRepository.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .id("getDamageRepositoryList")
                                .controller(controller => {
                                        controller.path("/damageRepository");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build()
                ]
}