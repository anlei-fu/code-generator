const { workshopInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.workshopInfoConfig = {
        table: workshopInfo,
        name: "WorkshopInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // fullName validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addWorkshopInfo")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("fullName","@NotNull")
                                           .validate("isDelete","@NotNull")
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
                        // workshopType validate : @Enum(workshopType)
                        new builder()
                                .type("update")
                                .id("updateWorkshopInfoById")
                                .includes(collection => {
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")

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
                                           .validate("workshopType","@Enum(workshopType)")
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
                        // fullName excluded 
                        // shortName excluded 
                        // workshopType validate : @Enum(workshopType)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(workshopInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["fullName","shortName"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getWorkshopInfoList")
                                .controller(controller => {
                                        controller.path("/workshopInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("workshopType","@Enum(workshopType)")
                                })
                                .build()
                ]
}