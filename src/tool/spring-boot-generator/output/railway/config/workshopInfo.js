const { workshopInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workshopInfoConfig = {
        table: workshopInfo,
        name: "WorkshopInfo",
                items: [

                        // add
                        // id excluded 
                        // fullName : validate --- @NotNull  
                        // workshopType : validate --- @Enum("workshopType")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addWorkshopInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("workshopType","@Enum(\"workshopType\")")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkshopInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // workshopType : validate --- @Enum("workshopType")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateWorkshopInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("workshopType","@Enum(\"workshopType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getWorkshopInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo/{id}");
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
                        // fullName : excluded 
                        // shortName : excluded 
                        // workshopType : validates --- @Enum("workshopType")  
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getWorkshopInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("workshopType","@Enum(\"workshopType\")")
                                })
                                .build()
                ]
}
