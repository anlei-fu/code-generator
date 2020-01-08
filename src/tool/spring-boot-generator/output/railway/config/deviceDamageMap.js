const { deviceDamageMap } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.deviceDamageMapConfig = {
        table: deviceDamageMap,
        name: "DeviceDamageMap",
                items: [

                        // add
                        // id excluded 
                        // deviceType : validate --- @Enum("deviceType")@@
                        new builder()
                                .type("insert")
                                .id("addDeviceDamageMap")
                                .alias("t")
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
                                .alias("t")
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
                        // deviceType : validate --- @Enum("deviceType")@@
                        new builder()
                                .type("update")
                                .id("updateDeviceDamageMapById")
                                .alias("t")
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
                                .alias("t")
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
                        // deviceType : validates --- @Enum("deviceType")  
                        // damageId : expression --- range@@
                        new builder()
                                .type("select")
                                .id("getDeviceDamageMapList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(deviceDamageMap.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(deviceDamageMap.columnsArray)
                                                  .excludes("id")
                                                  .exp("damageId","range")
                                })
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
