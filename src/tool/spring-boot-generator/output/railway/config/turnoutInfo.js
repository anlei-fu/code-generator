const { turnoutInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.turnoutInfoConfig = {
        table: turnoutInfo,
        name: "TurnoutInfo",
                items: [

                        // add
                        // id excluded 
                        // turnoutNo : validate --- @NotNull  
                        // stationId : validate --- @NotNull  
                        // lineId : validate --- @NotNull  
                        // workshopId : validate --- @NotNull  
                        // turnoutType : validate --- @Enum("turnoutType")  
                        // trackType : validate --- @Enum("trackType")  
                        // switchRailType : validate --- @Enum("switchRailType")  
                        // status : validate --- @Enum("status")  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addTurnoutInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("turnoutNo","@NotNull")
                                           .validate("stationId","@NotNull")
                                           .validate("lineId","@NotNull")
                                           .validate("workshopId","@NotNull")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTurnoutInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // turnoutType : validate --- @Enum("turnoutType")  
                        // trackType : validate --- @Enum("trackType")  
                        // switchRailType : validate --- @Enum("switchRailType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
                        new builder()
                                .type("update")
                                .id("updateTurnoutInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTurnoutInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo/{id}");
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
                        // turnoutType : validates --- @Enum("turnoutType")  
                        // trackType : validates --- @Enum("trackType")  
                        // switchRailType : validates --- @Enum("switchRailType")  
                        // status : validates --- @Enum("status")  
                        // remark : excluded 
                        // createTime : expression --- timeRange@@
                        new builder()
                                .type("select")
                                .id("getTurnoutInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
