const { @sname } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.@snameConfig = {
        table: @sname,
        name: "@name",
                items: [

                        // add
                        // createTime excluded 
                        // id validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("add@name")
                                .includes(collection => {
                                        collection.includes(@sname.columnsArray)
                                                  .excludes("@skey")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/@sname");
                                }).req(req => {
                                        req.doCreate()
                                           .excludes("@skey");
                                           .validate("id","@NotNull")
                                           .validate("isDelete","@NotNull")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("delete@nameBy@key")
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("update@nameBy@key")
                                .includes(collection => {
                                        collection.includes(@sname.columnsArray)
                                                  .excludes("@skey")

                                })
                                .conditions(collection => {
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey");
                                           .validate("status","@Enum(status)")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("get@nameBy@key")
                                .includes(collection=>{
                                        collection.includes(@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
                                .controller(controller => {
                                        controller.path("/@sname/{@skey}");
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // bridgeName excluded 
                        // createTime expression : timeRange
                        // remark excluded 
                        // status validate : @Enum(status)
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(@sname.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(@sname.columnsArray)
                                                  .excludes("@skey")
                                                  .excludes(["bridgeName","remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("get@nameList")
                                .controller(controller => {
                                        controller.path("/@sname");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("@skey")
                                           .validate("status","@Enum(status)")

                                })
                                .build()
                ]
}