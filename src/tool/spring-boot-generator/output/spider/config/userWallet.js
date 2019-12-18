/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { userWallet } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.userWalletConfig = {
        table: userWallet,
        name: "UserWallet",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addUserWallet")
                                .includes(c=>{
                                        c.includes(userWallet.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserWalletById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
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
                                .id("updateUserWalletById")
                                .includes(c=>{
                                        c.includes(userWallet.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
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
                                .id("getUserWalletById")
                                .includes(c=>{
                                        c.includes(userWallet.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/userWallet/{id}");
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
                                        c.includes(userWallet.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(userWallet.columnsArray)
                                         .excludes("id")
                                })
                                .id("getUserWalletList")
                                .controller(controller => {
                                        controller.path("/userWallet");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}