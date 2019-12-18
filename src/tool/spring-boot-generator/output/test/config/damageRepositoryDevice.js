/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryDevice")
                                .includes(c=>{
                                        c.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryDeviceByOrderDetailId")
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
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
                                .id("updateDamageRepositoryDeviceByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
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
                                .id("getDamageRepositoryDeviceByOrderDetailId")
                                .includes(c=>{
                                        c.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
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
                                        c.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .id("getDamageRepositoryDeviceList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build()
                ]
}