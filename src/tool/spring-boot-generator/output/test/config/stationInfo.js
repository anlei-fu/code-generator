const { stationInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.stationInfoConfig = {
        table: stationInfo,
        name: "StationInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // trackDivisionId validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addStationInfo")
                                .includes(collection => {
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("trackDivisionId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteStationInfoById")
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
                        // stationType validate : @Enum(stationType)  
                        // jobType validate : @Enum(jobType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateStationInfoById")
                                .includes(collection => {
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")

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
                                           .validate("stationType","@Enum(stationType)")
                                           .validate("jobType","@Enum(jobType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getStationInfoById")
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
                        // fullName excluded 
                        // shortName excluded 
                        // stationType validate : @Enum(stationType)  
                        // jobType validate : @Enum(jobType)  
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(stationInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getStationInfoList")
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("stationType","@Enum(stationType)")
                                           .validate("jobType","@Enum(jobType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}