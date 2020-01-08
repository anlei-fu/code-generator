const { trackDivisionInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.trackDivisionInfoConfig = {
        table: trackDivisionInfo,
        name: "TrackDivisionInfo",
                items: [

                        // add
                        // id excluded 
                        // fullName : validate --- @NotNull  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addTrackDivisionInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/trackDivisionInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackDivisionInfoById")
                                .alias("t")
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
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateTrackDivisionInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                .alias("t")
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
                        // fullName : excluded 
                        // shortName : excluded 
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getTrackDivisionInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(trackDivisionInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
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
