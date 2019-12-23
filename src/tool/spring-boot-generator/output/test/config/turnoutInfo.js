const { turnoutInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.turnoutInfoConfig = {
        table: turnoutInfo,
        name: "TurnoutInfo",
                items: [

                        // add
                        // id validate : @NotNull  
                        // turnoutNo validate : @NotNull  
                        // stationId validate : @NotNull  
                        // lineId validate : @NotNull  
                        // workareaId validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addTurnoutInfo")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                           .validate("turnoutNo","@NotNull")
                                           .validate("stationId","@NotNull")
                                           .validate("lineId","@NotNull")
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
                        // turnoutType validate : @Enum(turnoutType)  
                        // trackType validate : @Enum(trackType)  
                        // switchRailType validate : @Enum(switchRailType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateTurnoutInfoById")
                                .includes(collection => {
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")

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
                                           .validate("turnoutType","@Enum(turnoutType)")
                                           .validate("trackType","@Enum(trackType)")
                                           .validate("switchRailType","@Enum(switchRailType)")
                                           .validate("status","@Enum(status)")
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
                        // turnoutType validate : @Enum(turnoutType)  
                        // trackType validate : @Enum(trackType)  
                        // switchRailType validate : @Enum(switchRailType)  
                        // status validate : @Enum(status)  
                        // remark excluded 
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(turnoutInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getTurnoutInfoList")
                                .controller(controller => {
                                        controller.path("/turnoutInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("turnoutType","@Enum(turnoutType)")
                                           .validate("trackType","@Enum(trackType)")
                                           .validate("switchRailType","@Enum(switchRailType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}