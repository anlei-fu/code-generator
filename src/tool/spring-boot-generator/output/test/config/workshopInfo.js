const { workshopInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.workshopInfoConfig = {
        table: workshopInfo,
        name: "WorkshopInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addWorkshopInfo")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkshopInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
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
                                .id("updateWorkshopInfoById")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
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
                                .id("getWorkshopInfoById")
                                .includes(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
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
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                         .excludes("id")
                                })
                                .id("getWorkshopInfoList")
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}