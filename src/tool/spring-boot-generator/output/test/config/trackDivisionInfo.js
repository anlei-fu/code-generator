/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:56:34
 */
const { trackDivisionInfo ,bureauInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTrackDivisionInfo")
                                .includes(c=>{
                                        c.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackDivisionInfoById")
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("updateTrackDivisionInfoById")
                                .includes(c=>{
                                        c.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("getTrackDivisionInfoById")
                                .includes(c=>{
                                        c.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(c =>{
                                        c.includes("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                        c.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(c=>{
                                        c.includes(trackDivisionInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTrackDivisionInfoList")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                })
                                .join(join=>{
                                        join.table(bureauInfo)
                                            .includes(c=>{
                                                    c.includes(bureauInfo.columnsArray)
                                            })
                                            .joinCondtion("t1.id=t2.id");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .reqs(resp=>{
                                        resp.doCreate()
                                            .name("TrackDevisiobDetail")
                                })
                                .build()
                ]
}