const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectDeviceInfo")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
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
                                                .excludes("id");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectDeviceInfoList")
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}