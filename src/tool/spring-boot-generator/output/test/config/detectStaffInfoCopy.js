const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfoCopy")
                                .includes(collection => {
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
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
                                                .excludes("id");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectStaffInfoCopyList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}