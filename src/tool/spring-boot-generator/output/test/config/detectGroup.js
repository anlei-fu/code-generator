const { detectGroup } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.detectGroupConfig = {
        table: detectGroup,
        name: "DetectGroup",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectGroup")
                                .includes(collection => {
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/detectGroup");
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
                                .id("deleteDetectGroupById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateDetectGroupById")
                                .includes(collection => {
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectGroupById")
                                .includes(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
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
                        // groupName excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["groupName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDetectGroupList")
                                .controller(controller => {
                                        controller.path("/detectGroup");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}