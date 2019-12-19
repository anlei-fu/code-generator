const { @sname } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.@snameConfig = {
        table: @sname,
        name: "@name",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("add@name")
                                .includes(collection => {
                                        collection.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("delete@nameBy@key")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                         .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("update@nameBy@key")
                                .includes(collection => {
                                        collection.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .conditions(collection => {
                                        collection.includes("@skey")
                                         .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("get@nameBy@key")
                                .includes(collection=>{
                                        collection.includes(@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                         .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
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
                                        collection.includes(@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(@sname.columnsArray)
                                         .excludes("@skey")
                                })
                                .id("get@nameList")
                                .controller(controller => {
                                        controller.path("/@sname");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("@skey");
                                })
                                .build()
                ]
}