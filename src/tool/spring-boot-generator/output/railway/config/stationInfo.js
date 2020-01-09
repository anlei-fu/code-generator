const { stationInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.stationInfoConfig = {
        table: stationInfo,
        name: "StationInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // jobType : validate --- @Enum("jobType")  
                        // stationType : validate --- @Enum("stationType")  
                        // status : validate --- @Enum("status")  
                        // trackDivisionId : validate --- @NotNull  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addStationInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(stationInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/stationInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("stationType","@Enum(\"stationType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackDivisionId","@NotNull")
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
                        // createTime : excluded 
                        // jobType : validate --- @Enum("jobType")  
                        // stationType : validate --- @Enum("stationType")  
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
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
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("stationType","@Enum(\"stationType\")")
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
                        // createTime : expression --- timeRange
                        // fullName : excluded 
                        // jobType : validates --- @Enum("jobType")  
                        // shortName : excluded 
                        // stationType : validates --- @Enum("stationType")  
                        // status : validates --- @Enum("status")
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
                                           .validate("jobType","@Enum(\"jobType\")")
                                           .validate("stationType","@Enum(\"stationType\")")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
