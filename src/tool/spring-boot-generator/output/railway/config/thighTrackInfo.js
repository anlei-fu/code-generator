const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // thighTrackType : validate --- @Enum("thighTrackType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addThighTrackInfo")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("thighTrackType","@Enum(\"thighTrackType\")")
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
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // thighTrackType : validate --- @Enum("thighTrackType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateThighTrackInfoById")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("status","@Enum(\"status\")")
                                           .validate("thighTrackType","@Enum(\"thighTrackType\")")
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
                        // createTime : expression --- timeRange
                        // status : validates --- @Enum("status")  
                        // thighTrackType : validates --- @Enum("thighTrackType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
                                .id("getThighTrackInfoList")
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("thighTrackType","@Enum(\"thighTrackType\")")
                                })
                                .build()
                ]
}