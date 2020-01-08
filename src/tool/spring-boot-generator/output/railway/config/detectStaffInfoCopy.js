const { detectStaffInfoCopy } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectStaffInfoCopyConfig = {
        table: detectStaffInfoCopy,
        name: "DetectStaffInfoCopy",
                items: [

                        // add
                        // id excluded 
                        // gender : validate --- @Enum("gender")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addDetectStaffInfoCopy")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("gender","@Enum(\"gender\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectStaffInfoCopyById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // gender : validate --- @Enum("gender")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateDetectStaffInfoCopyById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                                .id("getDetectStaffInfoCopyById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy/{id}");
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
                        // name : excluded 
                        // gender : validates --- @Enum("gender")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getDetectStaffInfoCopyList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectStaffInfoCopy.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["name","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/detectStaffInfoCopy");
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
