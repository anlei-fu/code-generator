const { systemDictionary } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemDictionaryConfig = {
        table: systemDictionary,
        name: "SystemDictionary",
                items: [

                        // add
                        // id : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSystemDictionary")
                                .includes(collection => {
                                        collection.includes(systemDictionary.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/systemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemDictionaryById")
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
                                .includes(collection=>{
                                        collection.includes(systemDictionary.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemDictionary.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                })
                                .id("getSystemDictionaryList")
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