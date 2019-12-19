const { damageDealUser } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageDealUserConfig = {
        table: damageDealUser,
        name: "DamageDealUser",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageDealUser")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageDealUserById")
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                                .id("updateDamageDealUserById")
                                .includes(collection => {
                                        collection.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                                .id("getDamageDealUserById")
                                .includes(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                         .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/damageDealUser/{id}");
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
                                        collection.includes(damageDealUser.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageDealUser.columnsArray)
                                         .excludes("id")
                                })
                                .id("getDamageDealUserList")
                                .controller(controller => {
                                        controller.path("/damageDealUser");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("id");
                                })
                                .build()
                ]
}