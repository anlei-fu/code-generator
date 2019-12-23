const { userConsumeRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userConsumeRecordConfig = {
        table: userConsumeRecord,
        name: "UserConsumeRecord",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserConsumeRecord")
                                .includes(collection => {
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord");
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
                                .id("deleteUserConsumeRecordById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // consumeType : validate --- @Enum(consumeType)
                        new builder()
                                .type("update")
                                .id("updateUserConsumeRecordById")
                                .includes(collection => {
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("consumeType","@Enum(consumeType)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserConsumeRecordById")
                                .includes(collection=>{
                                        collection.includes(userConsumeRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord/{id}");
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
                        // consumeType : validates --- @Enum(consumeType)  
                        // remark : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userConsumeRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserConsumeRecordList")
                                .controller(controller => {
                                        controller.path("/userConsumeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("consumeType","@Enum(consumeType)")
                                })
                                .build()
                ]
}