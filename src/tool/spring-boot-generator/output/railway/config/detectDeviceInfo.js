const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
                items: [

                        // add
                        // id excluded 
                        // useStatus : validate --- @Enum("useStatus")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDetectDeviceInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("useStatus","@Enum(\"useStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectDeviceInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // useStatus : validate --- @Enum("useStatus")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDetectDeviceInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("useStatus","@Enum(\"useStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectDeviceInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo/{id}");
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
                        // deviceName : excluded 
                        // fixedAssetsPrice : expression --- range
                        // purchasePrice : expression --- range
                        // useStatus : validates --- @Enum("useStatus")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDetectDeviceInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["deviceName","remark"])
                                                  .exp("fixedAssetsPrice","range")
                                                  .exp("purchasePrice","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("useStatus","@Enum(\"useStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
