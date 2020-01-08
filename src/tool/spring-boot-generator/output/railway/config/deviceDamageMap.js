const { deviceDamageMap } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.deviceDamageMapConfig = {
        table: deviceDamageMap,
        name: "DeviceDamageMap",
                items: [

                        // add
                        // deviceType : validate --- @Enum("deviceType")  
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addDeviceDamageMap")
                                .includes(collection => {
                                        collection.includes(deviceDamageMap.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDeviceDamageMapById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // deviceType : validate --- @Enum("deviceType")
                        new builder()
                                .type("update")
                                .id("updateDeviceDamageMapById")
                                .includes(collection => {
                                        collection.includes(deviceDamageMap.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDeviceDamageMapById")
                                .includes(collection=>{
                                        collection.includes(deviceDamageMap.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/deviceDamageMap/{id}");
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
                        // damageId : expression --- range
                        // deviceType : validates --- @Enum("deviceType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(deviceDamageMap.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(deviceDamageMap.columnsArray)
                                                  .excludes("id")
                                                  .exp("damageId","range")
                                })
                                .id("getDeviceDamageMapList")
                                .controller(controller => {
                                        controller.path("/deviceDamageMap");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                })
                                .build()
                ]
}