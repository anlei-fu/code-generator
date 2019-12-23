const { bureauInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.bureauInfoConfig = {
        table: bureauInfo,
        name: "BureauInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // bureauName validate : @NotNull  
                        // bureauCode validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addBureauInfo")
                                .includes(collection => {
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("bureauName","@NotNull")
                                           .validate("bureauCode","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBureauInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById

                        new builder()
                                .type("update")
                                .id("updateBureauInfoById")
                                .includes(collection => {
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getBureauInfoById")
                                .includes(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
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
                        // bureauName excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["bureauName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getBureauInfoList")
                                .controller(controller => {
                                        controller.path("/bureauInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}