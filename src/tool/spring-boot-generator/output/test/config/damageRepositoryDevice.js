const { damageRepositoryDevice } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.damageRepositoryDeviceConfig = {
        table: damageRepositoryDevice,
        name: "DamageRepositoryDevice",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addDamageRepositoryDevice")
                                .includes(collection => {
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
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
                        new builder()
                                .type("update")
                                .id("updateDamageRepositoryDeviceByOrderDetailId")
                                .includes(collection => {
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
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
                                                .excludes("orderDetailId");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(damageRepositoryDevice.columnsArray)
                                         .excludes("orderDetailId")
                                })
                                .id("getDamageRepositoryDeviceList")
                                .controller(controller => {
                                        controller.path("/damageRepositoryDevice");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("orderDetailId");
                                })
                                .build()
                ]
}