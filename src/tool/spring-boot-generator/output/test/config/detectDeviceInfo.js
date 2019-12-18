/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectDeviceInfo")
                                .includes(c=>{
                                        c.includes(detectDeviceInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectDeviceInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
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
                                .id("updateDetectDeviceInfoById")
                                .includes(c=>{
                                        c.includes(detectDeviceInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
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
                                .id("getDetectDeviceInfoById")
                                .includes(c=>{
                                        c.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
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
                                        c.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(detectDeviceInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectDeviceInfoList")
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}