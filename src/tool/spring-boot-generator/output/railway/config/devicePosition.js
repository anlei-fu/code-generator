const { devicePosition } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.devicePositionConfig = {
        table: devicePosition,
        name: "DevicePosition",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDevicePosition")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDevicePositionById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                                .id("updateDevicePositionById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                                .id("getDevicePositionById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(devicePosition.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition/{id}");
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
                        // lineName : excluded
                        new builder()
                                .type("select")
                                .id("getDevicePositionList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(devicePosition.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["lineName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/devicePosition");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })

                                .build()
                ]
}
