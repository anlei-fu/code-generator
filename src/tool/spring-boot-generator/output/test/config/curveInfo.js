/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addCurveInfo")
                                .includes(c=>{
                                        c.includes(curveInfo.columnsArray)
                                         .excludes("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("curveId");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteCurveInfoByCurveId")
                                .conditions(c =>{
                                        c.includes("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateCurveInfoByCurveId")
                                .includes(c=>{
                                        c.includes(curveInfo.columnsArray)
                                         .excludes("curveId")
                                })
                                .conditions(c =>{
                                        c.includes("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
                                                .type("Integer")
                                                .from("@PathVarible");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("curveId");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getCurveInfoByCurveId")
                                .includes(c=>{
                                        c.includes(curveInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
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
                                        c.includes(curveInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(curveInfo.columnsArray)
                                         .excludes("curveId")
                                })
                                .id("getCurveInfoList")
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("curveId");
                                })
                                .build()
                ]
}