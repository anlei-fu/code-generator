/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 11:00:16
 */
const { @sname } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.@snameConfig = {
        table: @sname,
        name: "@name",
        items: [

                // add
                builder("insert", "add@name").controller(controller => {
                        controller.path("/@sname/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "delete@nameById").controller(controller => {
                        controller.path("/@sname/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "update@nameById").controller(controller => {
                        controller.path("/@sname/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "get@nameById").controller(controller => {
                        controller.path("/@sname/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.single();
                }),
        ]
}