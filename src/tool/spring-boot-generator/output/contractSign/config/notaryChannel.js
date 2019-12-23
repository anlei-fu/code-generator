const { notaryChannel } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.notaryChannelConfig = {
        table: notaryChannel,
        name: "NotaryChannel",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addNotaryChannel")
                                .includes(collection => {
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteNotaryChannelById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // apiUrl : validate --- @Url  
                        // status : validate --- @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateNotaryChannelById")
                                .includes(collection => {
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("apiUrl","@Url")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getNotaryChannelById")
                                .includes(collection=>{
                                        collection.includes(notaryChannel.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel/{id}");
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
                        // channelName : excluded 
                        // remark : excluded 
                        // apiUrl : excluded 
                        // status : validates --- @Enum(status)  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(notaryChannel.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["channelName","remark","apiUrl"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getNotaryChannelList")
                                .controller(controller => {
                                        controller.path("/notaryChannel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}