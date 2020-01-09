const { sysSystemDictionary } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.sysSystemDictionaryConfig = {
        table: sysSystemDictionary,
        name: "SysSystemDictionary",
                items: [

                        // add
                        // dicid excluded 
                        // enumType : validate --- @NotNull  
                        // sortId : validate --- @NotNull  
                        // status : validate --- @NotNull  @Enum("status")  
                        // text : validate --- @NotNull  
                        // value : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addSysSystemDictionary")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(sysSystemDictionary.columnsArray)
                                                  .excludes("dicid")
                                                  .excludes(["dicid"])
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("dicid")
                                           .validate("enumType","@NotNull")
                                           .validate("sortId","@NotNull")
                                           .validate("status","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("text","@NotNull")
                                           .validate("value","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSysSystemDictionaryByDicid")
                                .alias("t")
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
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateSysSystemDictionaryByDicid")
                                .alias("t")
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
                                           .excludes("dicid")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSysSystemDictionaryByDicid")
                                .alias("t")
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
                        // enumName : excluded 
                        // status : validates --- @Enum("status")  
                        // text : excluded
                        new builder()
                                .type("select")
                                .id("getSysSystemDictionaryList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(sysSystemDictionary.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(sysSystemDictionary.columnsArray)
                                                  .excludes("dicid")
                                                  .excludes(["enumName","text"])
                                })
                                .controller(controller => {
                                        controller.path("/sysSystemDictionary");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("dicid")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
