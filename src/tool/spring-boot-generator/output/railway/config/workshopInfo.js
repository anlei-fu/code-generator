const { workshopInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.workshopInfoConfig = {
        table: workshopInfo,
        name: "WorkshopInfo",
                items: [

                        // add
                        // createTime excluded 
                        // fullName : validate --- @NotNull  
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // updateTime excluded 
                        // workshopType : validate --- @Enum("workshopType")
                        new builder()
                                .type("insert")
                                .id("addWorkshopInfo")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("fullName","@NotNull")
                                           .validate("isDelete","@NotNull")
                                           .validate("workshopType","@Enum(\"workshopType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteWorkshopInfoById")
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
                        // createTime : excluded 
                        // updateTime : excluded 
                        // workshopType : validate --- @Enum("workshopType")
                        new builder()
                                .type("update")
                                .id("updateWorkshopInfoById")
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
                        // createTime : expression --- timeRange
                        // fullName : excluded 
                        // shortName : excluded 
                        // workshopType : validates --- @Enum("workshopType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getWorkshopInfoList")
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