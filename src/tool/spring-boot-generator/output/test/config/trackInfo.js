const { trackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.trackInfoConfig = {
        table: trackInfo,
        name: "TrackInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // trackCode validate : @NotNull  
                        // trackDivisionId validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addTrackInfo")
                                .includes(collection => {
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/trackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("trackCode","@NotNull")
                                           .validate("trackDivisionId","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // trackType validate : @Enum(trackType)
                        new builder()
                                .type("update")
                                .id("updateTrackInfoById")
                                .includes(collection => {
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(trackType)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTrackInfoById")
                                .includes(collection=>{
                                        collection.includes(trackInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/trackInfo/{id}");
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
                        // trackType validate : @Enum(trackType)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(trackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getTrackInfoList")
                                .controller(controller => {
                                        controller.path("/trackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(trackType)")
                                })
                                .build()
                ]
}