const { turnoutInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.turnoutInfoConfig = {
        table: turnoutInfo,
        name: "TurnoutInfo",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // lineId : validate --- @NotNull  
                        // stationId : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // switchRailType : validate --- @Enum("switchRailType")  
                        // trackType : validate --- @Enum("trackType")  
                        // turnoutNo : validate --- @NotNull  
                        // turnoutType : validate --- @Enum("turnoutType")  
                        // updateTime excluded 
                        // workareaId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addTurnoutInfo")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("lineId","@NotNull")
                                           .validate("stationId","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("turnoutNo","@NotNull")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                           .validate("workareaId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteTurnoutInfoById")
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
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // switchRailType : validate --- @Enum("switchRailType")  
                        // trackType : validate --- @Enum("trackType")  
                        // turnoutType : validate --- @Enum("turnoutType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateTurnoutInfoById")
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
                                           .validate("status","@Enum(\"status\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getTurnoutInfoById")
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
                        // createTime : expression --- timeRange
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // switchRailType : validates --- @Enum("switchRailType")  
                        // trackType : validates --- @Enum("trackType")  
                        // turnoutType : validates --- @Enum("turnoutType")
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .id("getTurnoutInfoList")
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("switchRailType","@Enum(\"switchRailType\")")
                                           .validate("trackType","@Enum(\"trackType\")")
                                           .validate("turnoutType","@Enum(\"turnoutType\")")
                                })
                                .build()
                ]
}