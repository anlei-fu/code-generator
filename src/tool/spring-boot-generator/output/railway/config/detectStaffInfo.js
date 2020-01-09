const { detectStaffInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectStaffInfoConfig = {
        table: detectStaffInfo,
        name: "DetectStaffInfo",
                items: [

                        // add
                        // createTime excluded 
                        // gender : validate --- @Enum("gender")  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectStaffInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // gender : validate --- @Enum("gender")  
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDetectStaffInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectStaffInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo/{id}");
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
                        // gender : validates --- @Enum("gender")  
                        // name : excluded 
                        // remark : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getDetectStaffInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
