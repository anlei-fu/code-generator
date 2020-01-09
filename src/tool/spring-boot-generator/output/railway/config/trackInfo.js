const { trackInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.trackInfoConfig = {
        table: trackInfo,
        name: "TrackInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // trackCode : validate --- @NotNull  
                        // trackDivisionId : validate --- @NotNull  
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addTrackInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/trackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("trackCode","@NotNull")
                                           .validate("trackDivisionId","@NotNull")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTrackInfoById")
                                .alias("t")
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
                        // createTime : excluded 
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateTrackInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTrackInfoById")
                                .alias("t")
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
                        // createTime : expression --- timeRange
                        // trackType : validates --- @Enum("trackType")
                        new builder()
                                .type("select")
                                .id("getTrackInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(trackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(trackInfo.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/trackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })

                                .build()
                ]
}
