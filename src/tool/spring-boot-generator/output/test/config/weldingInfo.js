const { weldingInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.weldingInfoConfig = {
        table: weldingInfo,
        name: "WeldingInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWeldingInfo")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWeldingInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                                .id("updateWeldingInfoById")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                                .id("getWeldingInfoById")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWeldingInfoList")
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}