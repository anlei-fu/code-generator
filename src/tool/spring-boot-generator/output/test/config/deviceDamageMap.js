/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { deviceDamageMap } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.deviceDamageMapConfig = {
        table: deviceDamageMap,
        name: "DeviceDamageMap",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDeviceDamageMap")
                                .includes(c=>{
                                        c.includes(deviceDamageMap.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDeviceDamageMapById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                                .id("updateDeviceDamageMapById")
                                .includes(c=>{
                                        c.includes(deviceDamageMap.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                                .id("getDeviceDamageMapById")
                                .includes(c=>{
                                        c.includes(deviceDamageMap.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                                        c.includes(deviceDamageMap.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(deviceDamageMap.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDeviceDamageMapList")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}