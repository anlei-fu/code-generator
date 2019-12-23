const { detectBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.detectBoundaryInfoConfig = {
        table: detectBoundaryInfo,
        name: "DetectBoundaryInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")
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
                        // trackType validate : @Enum(trackType)  
                        // operateStatus validate : @Enum(operateStatus)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDetectBoundaryInfoById")
                                .includes(collection => {
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")

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
                                           .validate("trackType","@Enum(trackType)")
                                           .validate("operateStatus","@Enum(operateStatus)")
                                           .validate("status","@Enum(status)")
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
                        // trackType validate : @Enum(trackType)  
                        // operateStatus validate : @Enum(operateStatus)  
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDetectBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/detectBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("trackType","@Enum(trackType)")
                                           .validate("operateStatus","@Enum(operateStatus)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}