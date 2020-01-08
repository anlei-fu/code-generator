const { weldingInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.weldingInfoConfig = {
        table: weldingInfo,
        name: "WeldingInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded 
                        // weldingType : validate --- @Enum("weldingType")
                        new builder()
                                .type("insert")
                                .id("addWeldingInfo")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWeldingInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                        // weldingType : validate --- @Enum("weldingType")
                        new builder()
                                .type("update")
                                .id("updateWeldingInfoById")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWeldingInfoById")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo/{id}");
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
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // weldingType : validates --- @Enum("weldingType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getWeldingInfoList")
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                })
                                .build()
                ]
}