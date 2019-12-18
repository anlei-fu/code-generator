/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { devicePosition } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.devicePositionConfig = {
        table: devicePosition,
        name: "DevicePosition",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDevicePosition")
                                .includes(c=>{
                                        c.includes(devicePosition.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDevicePositionById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                                .id("updateDevicePositionById")
                                .includes(c=>{
                                        c.includes(devicePosition.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                                .id("getDevicePositionById")
                                .includes(c=>{
                                        c.includes(devicePosition.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                                        c.includes(devicePosition.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(devicePosition.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDevicePositionList")
                                .controller(controller => {
                                        controller.path("/devicePosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}