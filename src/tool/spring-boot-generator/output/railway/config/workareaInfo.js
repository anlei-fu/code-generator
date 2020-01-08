const { workareaInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workareaInfoConfig = {
        table: workareaInfo,
        name: "WorkareaInfo",
                items: [

                        // add
                        // createTime excluded 
                        // fullName : validate --- @NotNull  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // shortName : validate --- @NotNull  
                        // updateTime excluded 
                        // workshopId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addWorkareaInfo")
                                .includes(collection => {
                                        collection.includes(workareaInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/workareaInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("isDelete","@NotNull")
                                           .validate("shortName","@NotNull")
                                           .validate("workshopId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkareaInfoById")
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
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateWorkareaInfoById")
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
                        // createTime : expression --- timeRange
                        // fullName : excluded 
                        // shortName : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workareaInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getWorkareaInfoList")
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