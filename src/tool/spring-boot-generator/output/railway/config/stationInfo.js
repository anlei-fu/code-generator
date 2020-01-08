const { stationInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.stationInfoConfig = {
        table: stationInfo,
        name: "StationInfo",
                items: [

                        // add
                        // id excluded 
                        // trackDivisionId : validate --- @NotNull  
                        // stationType : validate --- @Enum("stationType")  
                        // jobType : validate --- @Enum("jobType")  
                        // status : validate --- @Enum("status")  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addStationInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackDivisionId","@NotNull")
                                           .validate("stationType","@Enum(\"stationType\")")
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // stationType : validate --- @Enum("stationType")  
                        // jobType : validate --- @Enum("jobType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateStationInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("stationType","@Enum(\"stationType\")")
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getStationInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(stationInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo/{id}");
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
                        // stationType : validates --- @Enum("stationType")  
                        // jobType : validates --- @Enum("jobType")  
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getStationInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(stationInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("stationType","@Enum(\"stationType\")")
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
