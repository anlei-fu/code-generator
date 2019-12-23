const { detectStaffInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.detectStaffInfoConfig = {
        table: detectStaffInfo,
        name: "DetectStaffInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfo")
                                .includes(collection => {
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
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
                                .id("deleteDetectStaffInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // gender validate : @Enum(gender)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDetectStaffInfoById")
                                .includes(collection => {
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(gender)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectStaffInfoById")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
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
                        // name excluded 
                        // gender validate : @Enum(gender)  
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDetectStaffInfoList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(gender)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}