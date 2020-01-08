const { bureauInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.bureauInfoConfig = {
        table: bureauInfo,
        name: "BureauInfo",
                items: [

                        // add
                        // id excluded 
                        // bureauName : validate --- @NotNull  
                        // bureauCode : validate --- @NotNull  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addBureauInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("bureauName","@NotNull")
                                           .validate("bureauCode","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBureauInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
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
                                .id("updateBureauInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
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
                                .id("getBureauInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo/{id}");
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
                        // bureauName : excluded 
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getBureauInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(bureauInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["bureauName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/bureauInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
