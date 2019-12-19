const { sysSystemDictionary } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.sysSystemDictionaryConfig = {
        table: sysSystemDictionary,
        name: "SysSystemDictionary",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addSysSystemDictionary")
                                .includes(collection => {
                                        collection.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSysSystemDictionaryByDicid")
                                .conditions(collection => {
                                        collection.includes("dicid")
                                         .require("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        new builder()
                                .type("update")
                                .id("updateSysSystemDictionaryByDicid")
                                .includes(collection => {
                                        collection.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .conditions(collection => {
                                        collection.includes("dicid")
                                         .require("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
                                                .type("Integer")
                                                .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSysSystemDictionaryByDicid")
                                .includes(collection=>{
                                        collection.includes(sysSystemDictionary.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("dicid")
                                         .require("dicid")
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary/{dicid}");
                                })
                                .req(req => {
                                        req.name("dicid")
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
                                        collection.includes(sysSystemDictionary.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(sysSystemDictionary.columnsArray)
                                         .excludes("dicid")
                                })
                                .id("getSysSystemDictionaryList")
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("dicid");
                                })
                                .build()
                ]
}