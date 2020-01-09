const { userConsumeRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userConsumeRecordConfig = {
        table: userConsumeRecord,
        name: "UserConsumeRecord",
                items: [

                        // add
                        // consumeType : validate --- @Enum("consumeType")  
                        // createTime excluded 
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addUserConsumeRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("consumeType","@Enum(\"consumeType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserConsumeRecordById")
                                .alias("t")
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
                        // consumeType : validate --- @Enum("consumeType")  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateUserConsumeRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("consumeType","@Enum(\"consumeType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserConsumeRecordById")
                                .alias("t")
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
                        // consumeAmount : expression --- range
                        // consumeType : validates --- @Enum("consumeType")  
                        // createTime : expression --- timeRange
                        // remark : excluded
                        new builder()
                                .type("select")
                                .id("getUserConsumeRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userConsumeRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userConsumeRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["remark"])
                                                  .exp("consumeAmount","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userConsumeRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("consumeType","@Enum(\"consumeType\")")
                                })

                                .build()
                ]
}
