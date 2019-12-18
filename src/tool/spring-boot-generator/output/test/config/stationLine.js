/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { stationLine } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.stationLineConfig = {
        table: stationLine,
        name: "StationLine",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addStationLine")
                                .includes(c=>{
                                        c.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationLineById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                .id("updateStationLineById")
                                .includes(c=>{
                                        c.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                .id("getStationLineById")
                                .includes(c=>{
                                        c.includes(stationLine.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationLine/{id}");
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
                                        c.includes(stationLine.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(stationLine.columnsArray)
                                         .excludes("id")
                                })
                                .id("getStationLineList")
                                .controller(controller => {
                                        controller.path("/stationLine");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}