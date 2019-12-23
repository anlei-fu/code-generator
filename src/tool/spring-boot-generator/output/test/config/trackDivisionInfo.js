const { trackDivisionInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // fullName validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addTrackDivisionInfo")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("fullName","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackDivisionInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                                .id("updateTrackDivisionInfoById")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTrackDivisionInfoById")
                                .includes(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo/{id}");
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
                        // fullName excluded 
                        // shortName excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getTrackDivisionInfoList")
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}