const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectDeviceInfo")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
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
                                .id("deleteDetectDeviceInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // useStatus validate : @Enum(useStatus)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDetectDeviceInfoById")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("useStatus","@Enum(useStatus)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectDeviceInfoById")
                                .includes(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
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
                        // deviceName excluded 
                        // useStatus validate : @Enum(useStatus)  
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["deviceName","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDetectDeviceInfoList")
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("useStatus","@Enum(useStatus)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}