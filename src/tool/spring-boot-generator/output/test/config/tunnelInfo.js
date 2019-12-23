const { tunnelInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.tunnelInfoConfig = {
        table: tunnelInfo,
        name: "TunnelInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addTunnelInfo")
                                .includes(collection => {
                                        collection.includes(tunnelInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/tunnelInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTunnelInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/tunnelInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateTunnelInfoById")
                                .includes(collection => {
                                        collection.includes(tunnelInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/tunnelInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTunnelInfoById")
                                .includes(collection=>{
                                        collection.includes(tunnelInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/tunnelInfo/{id}");
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
                        // tunneName excluded 
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(tunnelInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(tunnelInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["tunneName","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getTunnelInfoList")
                                .controller(controller => {
                                        controller.path("/tunnelInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}