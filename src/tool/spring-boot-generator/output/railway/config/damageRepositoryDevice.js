const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
                items: [

                        // add
                        // orderDetailId excluded 
                        // deviceType : validate --- @Enum("deviceType")  
                        // railType : validate --- @Enum("railType")  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryDevice")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["orderDetailId","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                           .validate("railType","@Enum(\"railType\")")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryDeviceByUserAndOrderDetailId")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),
                                
                        // updateById
                        // deviceType : validate --- @Enum("deviceType")  
                        // railType : validate --- @Enum("railType")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryDeviceByUserAndOrderDetailId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                           .validate("railType","@Enum(\"railType\")")
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryDeviceByUserAndOrderDetailId")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("orderDetailId")
                                                  .require("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice/{orderDetailId}");
                                })
                                .req(req => {
                                        req.name("orderDetailId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .req(req=>{
                                        req.name("user")
                                           .type("String")
                                           .from("@Session")
                                })@@
                                .build(),

                        // getList
                        // deviceName : excluded 
                        // deviceType : validates --- @Enum("deviceType")  
                        // totalWeight : expression --- range
                        // userDate : excluded 
                        // railType : validates --- @Enum("railType")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryDeviceList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["deviceName","userDate"])
                                                  .exp("totalWeight","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("orderDetailId")
                                           .validate("deviceType","@Enum(\"deviceType\")")
                                           .validate("railType","@Enum(\"railType\")")
                                })
                                .build()
                ]
}
