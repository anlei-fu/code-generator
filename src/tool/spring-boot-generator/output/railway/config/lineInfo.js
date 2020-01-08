const { lineInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.lineInfoConfig = {
        table: lineInfo,
        name: "LineInfo",
                items: [

                        // add
                        // id excluded 
                        // fullName : validate --- @NotNull  
                        // shortName : validate --- @NotNull  
                        // lineCode : validate --- @NotNull  
                        // inputCode : validate --- @NotNull  
                        // trackType : validate --- @Enum("trackType")  
                        // tractionType : validate --- @Enum("tractionType")  
                        // ballastType : validate --- @Enum("ballastType")  
                        // operateType : validate --- @Enum("operateType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addLineInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(lineInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/lineInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("shortName","@NotNull")
                                           .validate("lineCode","@NotNull")
                                           .validate("inputCode","@NotNull")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
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
                        // trackType : validate --- @Enum("trackType")  
                        // tractionType : validate --- @Enum("tractionType")  
                        // ballastType : validate --- @Enum("ballastType")  
                        // operateType : validate --- @Enum("operateType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
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
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("status","@Enum(\"status\")")
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
                        // fullName : excluded 
                        // shortName : excluded 
                        // trackType : validates --- @Enum("trackType")  
                        // tractionType : validates --- @Enum("tractionType")  
                        // ballastType : validates --- @Enum("ballastType")  
                        // operateType : validates --- @Enum("operateType")  
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
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
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("tractionType","@Enum(\"tractionType\")")
                                           .validate("ballastType","@Enum(\"ballastType\")")
                                           .validate("operateType","@Enum(\"operateType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
