const { bureauLineOrder } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.bureauLineOrderConfig = {
        table: bureauLineOrder,
        name: "BureauLineOrder",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addBureauLineOrder")
                                .includes(collection => {
                                        collection.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBureauLineOrderById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
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
                                .id("updateBureauLineOrderById")
                                .includes(collection => {
                                        collection.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
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
                                .id("getBureauLineOrderById")
                                .includes(collection=>{
                                        collection.includes(bureauLineOrder.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauLineOrder/{id}");
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
                                        collection.includes(bureauLineOrder.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(bureauLineOrder.columnsArray)
                                         .excludes("id")
                                })
                                .id("getBureauLineOrderList")
                                .controller(controller => {
                                        controller.path("/bureauLineOrder");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}