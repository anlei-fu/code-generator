const { turnoutInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.turnoutInfoConfig = {
        table: turnoutInfo,
        name: "TurnoutInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addTurnoutInfo")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTurnoutInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
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
                                .id("updateTurnoutInfoById")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
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
                                .id("getTurnoutInfoById")
                                .includes(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
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
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getTurnoutInfoList")
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}