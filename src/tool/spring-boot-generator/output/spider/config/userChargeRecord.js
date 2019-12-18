/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { userChargeRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userChargeRecordConfig = {
        table: userChargeRecord,
        name: "UserChargeRecord",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addUserChargeRecord")
                                .includes(c=>{
                                        c.includes(userChargeRecord.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserChargeRecordById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateUserChargeRecordById")
                                .includes(c=>{
                                        c.includes(userChargeRecord.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserChargeRecordById")
                                .includes(c=>{
                                        c.includes(userChargeRecord.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userChargeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        new builder()
                                .type("select")
                                .includes(c=>{
                                        c.includes(userChargeRecord.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(userChargeRecord.columnsArray)
                                         .excludes("id")
                                })
                                .id("getUserChargeRecordList")
                                .controller(controller => {
                                        controller.path("/userChargeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}