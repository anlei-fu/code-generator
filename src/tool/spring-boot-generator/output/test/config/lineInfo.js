const { lineInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.lineInfoConfig = {
        table: lineInfo,
        name: "LineInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // fullName validate : @NotNull  
                        // shortName validate : @NotNull  
                        // lineCode validate : @NotNull  
                        // inputCode validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addLineInfo")
                                .includes(collection => {
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/lineInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("fullName","@NotNull")
                                           .validate("shortName","@NotNull")
                                           .validate("lineCode","@NotNull")
                                           .validate("inputCode","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteLineInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // trackType validate : @Enum(trackType)  
                        // tractionType validate : @Enum(tractionType)  
                        // gaugeType validate : @Enum(gaugeType)  
                        // ballastType validate : @Enum(ballastType)  
                        // operateType validate : @Enum(operateType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateLineInfoById")
                                .includes(collection => {
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo/{id}");
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
                                           .validate("tractionType","@Enum(tractionType)")
                                           .validate("gaugeType","@Enum(gaugeType)")
                                           .validate("ballastType","@Enum(ballastType)")
                                           .validate("operateType","@Enum(operateType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getLineInfoById")
                                .includes(collection=>{
                                        collection.includes(lineInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo/{id}");
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
                        // trackType validate : @Enum(trackType)  
                        // tractionType validate : @Enum(tractionType)  
                        // gaugeType validate : @Enum(gaugeType)  
                        // ballastType validate : @Enum(ballastType)  
                        // operateType validate : @Enum(operateType)  
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(lineInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getLineInfoList")
                                .controller(controller => {
                                        controller.path("/lineInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(trackType)")
                                           .validate("tractionType","@Enum(tractionType)")
                                           .validate("gaugeType","@Enum(gaugeType)")
                                           .validate("ballastType","@Enum(ballastType)")
                                           .validate("operateType","@Enum(operateType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}