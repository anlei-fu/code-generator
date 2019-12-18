/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { userDeductRecord } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userDeductRecordConfig = {
        table: userDeductRecord,
        name: "UserDeductRecord",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addUserDeductRecord")
                                .includes(c=>{
                                        c.includes(userDeductRecord.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserDeductRecordById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                                .id("updateUserDeductRecordById")
                                .includes(c=>{
                                        c.includes(userDeductRecord.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                                .id("getUserDeductRecordById")
                                .includes(c=>{
                                        c.includes(userDeductRecord.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userDeductRecord/{id}");
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
                                        c.includes(userDeductRecord.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(userDeductRecord.columnsArray)
                                         .excludes("id")
                                })
                                .id("getUserDeductRecordList")
                                .controller(controller => {
                                        controller.path("/userDeductRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}