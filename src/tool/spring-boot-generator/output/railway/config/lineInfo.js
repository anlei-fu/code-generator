const { lineInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.lineInfoConfig = {
        table: lineInfo,
        name: "LineInfo",
                items: [

                        // add
                        // ballastType : validate --- @Enum("ballastType")  
                        // createTime excluded 
                        // fullName : validate --- @NotNull  
                        // gaugeType : validate --- @Enum("gaugeType")  
                        // id excluded 
                        // inputCode : validate --- @NotNull  
                        // isDelete : validate --- @NotNull  
                        // lineCode : validate --- @NotNull  
                        // operateType : validate --- @Enum("operateType")  
                        // shortName : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // tractionType : validate --- @Enum("tractionType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addLineInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("fullName","@NotNull")
                                           .validate("gaugeType","@Enum(\"gaugeType\")")
                                           .validate("inputCode","@NotNull")
                                           .validate("isDelete","@NotNull")
                                           .validate("lineCode","@NotNull")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("shortName","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteLineInfoById")
                                .alias("t")
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
                        // ballastType : validate --- @Enum("ballastType")  
                        // createTime : excluded 
                        // gaugeType : validate --- @Enum("gaugeType")  
                        // operateType : validate --- @Enum("operateType")  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // tractionType : validate --- @Enum("tractionType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateLineInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

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
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("gaugeType","@Enum(\"gaugeType\")")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getLineInfoById")
                                .alias("t")
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
                        // ballastType : validates --- @Enum("ballastType")  
                        // createTime : expression --- timeRange
                        // fullName : excluded 
                        // gaugeType : validates --- @Enum("gaugeType")  
                        // operateType : validates --- @Enum("operateType")  
                        // shortName : excluded 
                        // status : validates --- @Enum("status")  
                        // trackType : validates --- @Enum("trackType")  
                        // tractionType : validates --- @Enum("tractionType")
                        new builder()
                                .type("select")
                                .id("getLineInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(lineInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("gaugeType","@Enum(\"gaugeType\")")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                })

                                .build()
                ]
}
