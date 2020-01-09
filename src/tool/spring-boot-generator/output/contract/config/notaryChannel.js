const { notaryChannel } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.notaryChannelConfig = {
        table: notaryChannel,
        name: "NotaryChannel",
                items: [

                        // add
                        // apiUrl : validate --- @Url  
                        // createTime excluded 
                        // id excluded 
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("insert")
                                .id("addNotaryChannel")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("apiUrl","@Url")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteNotaryChannelById")
                                .alias("t")
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
                        // createTime : excluded 
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateNotaryChannelById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getNotaryChannelById")
                                .alias("t")
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
                        // apiKey : excluded 
                        // apiUrl : excluded 
                        // channelName : excluded 
                        // createTime : expression --- timeRange
                        // remark : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getNotaryChannelList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(notaryChannel.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(notaryChannel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["apiKey","apiUrl","channelName","remark"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/notaryChannel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
