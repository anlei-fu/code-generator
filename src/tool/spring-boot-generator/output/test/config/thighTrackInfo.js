const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addThighTrackInfo")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteThighTrackInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // thighTrackType validate : @Enum(thighTrackType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateThighTrackInfoById")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("thighTrackType","@Enum(thighTrackType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getThighTrackInfoById")
                                .includes(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo/{id}");
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
                        // thighTrackType validate : @Enum(thighTrackType)  
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .expression("createTime","timeRange")

                                })
                                .id("getThighTrackInfoList")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("thighTrackType","@Enum(thighTrackType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}