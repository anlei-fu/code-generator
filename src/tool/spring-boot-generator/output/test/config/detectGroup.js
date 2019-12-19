const { detectGroup } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectGroupConfig = {
        table: detectGroup,
        name: "DetectGroup",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectGroup")
                                .includes(collection => {
                                        collection.includes(detectGroup.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
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
                                                .excludes("id");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectGroupList")
                                .controller(controller => {
                                        controller.path("/detectGroup");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}