const { weldingInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.weldingInfoConfig = {
        table: weldingInfo,
        name: "WeldingInfo",
                items: [

                        // add
                        // id excluded 
                        // weldingType : validate --- @Enum("weldingType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addWeldingInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWeldingInfoById")
                                .alias("t")
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
                        // weldingType : validate --- @Enum("weldingType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateWeldingInfoById")
                                .alias("t")
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
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWeldingInfoById")
                                .alias("t")
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
                        // weldingType : validates --- @Enum("weldingType")  
                        // status : validates --- @Enum("status")  
                        // remark : excluded 
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getWeldingInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(weldingInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/weldingInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("weldingType","@Enum(\"weldingType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
