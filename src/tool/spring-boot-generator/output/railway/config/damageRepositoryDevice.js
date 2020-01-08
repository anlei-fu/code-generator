const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
                items: [

                        // add
                        // createTime excluded 
                        // deviceType : validate --- @Enum("deviceType")  
                        // orderDetailId excluded 
                        // railType : validate --- @Enum("railType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryDevice")
                                .includes(collection => {
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["createTime","orderDetailId","updateTime"])
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
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDamageRepositoryDeviceByOrderDetailId")
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
                                .build(),

                        // updateById
                        // createTime : excluded 
                        // deviceType : validate --- @Enum("deviceType")  
                        // railType : validate --- @Enum("railType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryDeviceByOrderDetailId")
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
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDamageRepositoryDeviceByOrderDetailId")
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
                                .build(),

                        // getList
                        // createTime : expression --- timeRange
                        // deviceName : excluded 
                        // deviceType : validates --- @Enum("deviceType")  
                        // railType : validates --- @Enum("railType")  
                        // totalWeight : expression --- range
                        // userDate : excluded
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                                  .excludes("orderDetailId")
                                                  .excludes(["deviceName","userDate"])
                                                  .exp("createTime","timeRange")
                                                  .exp("totalWeight","range")
                                })
                                .id("getDamageRepositoryDeviceList")
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