/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfoCopy")
                                .includes(c=>{
                                        c.includes(detectStaffInfoCopy.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectStaffInfoCopyById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("updateDetectStaffInfoCopyById")
                                .includes(c=>{
                                        c.includes(detectStaffInfoCopy.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("getDetectStaffInfoCopyById")
                                .includes(c=>{
                                        c.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                        c.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(detectStaffInfoCopy.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectStaffInfoCopyList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}