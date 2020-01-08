const { thighTrackInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.thighTrackInfoConfig = {
        table: thighTrackInfo,
        name: "ThighTrackInfo",
                items: [

                        // add
                        // id excluded 
                        // thignTrackType : validate --- @Enum("thignTrackType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addThighTrackInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("thignTrackType","@Enum(\"thignTrackType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteThighTrackInfoById")
                                .alias("t")
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
                        // thignTrackType : validate --- @Enum("thignTrackType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateThighTrackInfoById")
                                .alias("t")
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
                                           .validate("thignTrackType","@Enum(\"thignTrackType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getThighTrackInfoById")
                                .alias("t")
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
                        // thignTrackType : validates --- @Enum("thignTrackType")  
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getThighTrackInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(thighTrackInfo.columnsArray)
                                                  .excludes("id")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/thighTrackInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("thignTrackType","@Enum(\"thignTrackType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
