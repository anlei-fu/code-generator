const { systemDictionary } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemDictionaryConfig = {
        table: systemDictionary,
        name: "SystemDictionary",
                items: [

                        // add
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addSystemDictionary")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemDictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemDictionaryById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary/{id}");
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
                                .id("updateSystemDictionaryById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemDictionary.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSystemDictionaryById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemDictionary.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary/{id}");
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
                        // remark : excluded
                        new builder()
                                .type("select")
                                .id("getSystemDictionaryList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemDictionary.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemDictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })

                                .build()
                ]
}
