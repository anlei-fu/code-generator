const { workareaInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workareaInfoConfig = {
        table: workareaInfo,
        name: "WorkareaInfo",
                items: [

                        // add
                        // id excluded 
                        // fullName : validate --- @NotNull  
                        // shortName : validate --- @NotNull  
                        // workshopId : validate --- @NotNull  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addWorkareaInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(workareaInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("shortName","@NotNull")
                                           .validate("workshopId","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkareaInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateWorkareaInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(workareaInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
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
                                .id("getWorkareaInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo/{id}");
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
                        // fullName : excluded 
                        // shortName : excluded 
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getWorkareaInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
