const { devicePosition } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.devicePositionConfig = {
        table: devicePosition,
        name: "DevicePosition",
                items: [

                        // add
                        // id validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDevicePosition")
                                .includes(collection => {
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/devicePosition");
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
                                .id("deleteDevicePositionById")
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

                        new builder()
                                .type("update")
                                .id("updateDevicePositionById")
                                .includes(collection => {
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")

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
                        // lineName excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(devicePosition.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(devicePosition.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["lineName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getDevicePositionList")
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