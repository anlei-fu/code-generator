const { bridgeInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bridgeInfoConfig = {
        table: bridgeInfo,
        name: "BridgeInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addBridgeInfo")
                                .includes(collection => {
                                        collection.includes(bridgeInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBridgeInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
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
                                .id("updateBridgeInfoById")
                                .includes(collection => {
                                        collection.includes(bridgeInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
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
                                .id("getBridgeInfoById")
                                .includes(collection=>{
                                        collection.includes(bridgeInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
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
                                        collection.includes(bridgeInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(bridgeInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getBridgeInfoList")
                                .controller(controller => {
                                        controller.path("/bridgeInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}