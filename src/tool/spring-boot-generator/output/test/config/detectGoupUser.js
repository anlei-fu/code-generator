const { detectGoupUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.detectGoupUserConfig = {
        table: detectGoupUser,
        name: "DetectGoupUser",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDetectGoupUser")
                                .includes(collection => {
                                        collection.includes(detectGoupUser.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGoupUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectGoupUserById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
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
                                .id("updateDetectGoupUserById")
                                .includes(collection => {
                                        collection.includes(detectGoupUser.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
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
                                .id("getDetectGoupUserById")
                                .includes(collection=>{
                                        collection.includes(detectGoupUser.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGoupUser/{id}");
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
                                        collection.includes(detectGoupUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectGoupUser.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDetectGoupUserList")
                                .controller(controller => {
                                        controller.path("/detectGoupUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}