const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
                items: [

                        // add
                        // id excluded 
                        // trackType : validate --- @Enum("trackType")  
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDetectBoundaryInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectBoundaryInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // trackType : validate --- @Enum("trackType")  
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDetectBoundaryInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectBoundaryInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo/{id}");
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
                        // trackType : validates --- @Enum("trackType")  
                        // operateStatus : validates --- @Enum("operateStatus")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDetectBoundaryInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
