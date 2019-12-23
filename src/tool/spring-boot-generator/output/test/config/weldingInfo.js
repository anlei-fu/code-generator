const { weldingInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.weldingInfoConfig = {
        table: weldingInfo,
        name: "WeldingInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addWeldingInfo")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo");
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
                                .id("deleteWeldingInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // weldingType validate : @Enum(weldingType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateWeldingInfoById")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("weldingType","@Enum(weldingType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWeldingInfoById")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                        // weldingType validate : @Enum(weldingType)  
                        // status validate : @Enum(status)  
                        // remark excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getWeldingInfoList")
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("weldingType","@Enum(weldingType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}