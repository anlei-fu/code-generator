const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectBoundaryInfoById")
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
                        // createTime : excluded 
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDetectBoundaryInfoById")
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
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectBoundaryInfoById")
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
                        // createTime : expression --- timeRange
                        // operateStatus : validates --- @Enum("operateStatus")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // trackType : validates --- @Enum("trackType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getDetectBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build()
                ]
}