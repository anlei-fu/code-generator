const { bridgeInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.bridgeInfoConfig = {
        table: bridgeInfo,
        name: "BridgeInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addBridgeInfo")
                                .includes(collection => {
                                        collection.includes(bridgeInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteBridgeInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateBridgeInfoById")
                                .includes(collection => {
                                        collection.includes(bridgeInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getBridgeInfoById")
                                .includes(collection=>{
                                        collection.includes(bridgeInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/bridgeInfo/{id}");
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
                        // bridgeName : excluded 
                        // createTime : expression --- timeRange
                        // remark : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(bridgeInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(bridgeInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["bridgeName","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getBridgeInfoList")
                                .controller(controller => {
                                        controller.path("/bridgeInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}