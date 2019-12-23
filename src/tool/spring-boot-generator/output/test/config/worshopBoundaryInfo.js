const { worshopBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.worshopBoundaryInfoConfig = {
        table: worshopBoundaryInfo,
        name: "WorshopBoundaryInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addWorshopBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
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
                                .id("deleteWorshopBoundaryInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("updateWorshopBoundaryInfoById")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                .id("getWorshopBoundaryInfoById")
                                .includes(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getWorshopBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
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