const { detectDeviceInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectDeviceInfoConfig = {
        table: detectDeviceInfo,
        name: "DetectDeviceInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded 
                        // useStatus : validate --- @Enum("useStatus")
                        new builder()
                                .type("insert")
                                .id("addDetectDeviceInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectDeviceInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("useStatus","@Enum(\"useStatus\")")
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
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded 
                        // useStatus : validate --- @Enum("useStatus")
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
                                           .validate("status","@Enum(\"status\")")
                                           .validate("useStatus","@Enum(\"useStatus\")")
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
                        // createTime : expression --- timeRange
                        // deviceName : excluded 
                        // fixedAssetsPrice : expression --- range
                        // purchasePrice : expression --- range
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // useStatus : validates --- @Enum("useStatus")
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
                                                  .exp("createTime","timeRange")
                                                  .exp("fixedAssetsPrice","range")
                                                  .exp("purchasePrice","range")
                                })
                                .controller(controller => {
                                        controller.path("/detectDeviceInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("useStatus","@Enum(\"useStatus\")")
                                })

                                .build()
                ]
}
