const { detectStaffInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectStaffInfoConfig = {
        table: detectStaffInfo,
        name: "DetectStaffInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfo")
                                .includes(collection => {
                                        collection.includes(detectStaffInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
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
                                                .excludes("id");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectStaffInfoList")
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}