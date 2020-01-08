const { worshopBoundaryInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.worshopBoundaryInfoConfig = {
        table: worshopBoundaryInfo,
        name: "WorshopBoundaryInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addWorshopBoundaryInfo")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorshopBoundaryInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // createTime : excluded 
                        // operateStatus : validate --- @Enum("operateStatus")  
                        // status : validate --- @Enum("status")  
                        // trackType : validate --- @Enum("trackType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateWorshopBoundaryInfoById")
                                .includes(collection => {
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWorshopBoundaryInfoById")
                                .includes(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo/{id}");
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
                        // operateStatus : validates --- @Enum("operateStatus")  
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // trackType : validates --- @Enum("trackType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(worshopBoundaryInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getWorshopBoundaryInfoList")
                                .controller(controller => {
                                        controller.path("/worshopBoundaryInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("operateStatus","@Enum(\"operateStatus\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                })
                                .build()
                ]
}