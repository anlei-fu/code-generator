const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfoCopy")
                                .includes(collection => {
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
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
                                .id("deleteDetectStaffInfoCopyById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("updateDetectStaffInfoCopyById")
                                .includes(collection => {
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("getDetectStaffInfoCopyById")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDetectStaffInfoCopyList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
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