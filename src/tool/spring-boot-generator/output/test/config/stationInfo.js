/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { stationInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.stationInfoConfig = {
        table: stationInfo,
        name: "StationInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addStationInfo")
                                .includes(c=>{
                                        c.includes(stationInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
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
                                .id("updateStationInfoById")
                                .includes(c=>{
                                        c.includes(stationInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
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
                                .id("getStationInfoById")
                                .includes(c=>{
                                        c.includes(stationInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
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
                                        c.includes(stationInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(stationInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getStationInfoList")
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}