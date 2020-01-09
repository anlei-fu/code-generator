const { userPurchaseRecord } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userPurchaseRecordConfig = {
        table: userPurchaseRecord,
        name: "UserPurchaseRecord",
                items: [

                        // add
                        // contractType : validate --- @Enum("contractType")  
                        // createTime excluded 
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addUserPurchaseRecord")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserPurchaseRecordById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // contractType : validate --- @Enum("contractType")  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateUserPurchaseRecordById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserPurchaseRecordById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord/{id}");
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
                        // contractCount : expression --- range
                        // contractType : validates --- @Enum("contractType")  
                        // createTime : expression --- timeRange
                        // mealPrice : expression --- range
                        new builder()
                                .type("select")
                                .id("getUserPurchaseRecordList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userPurchaseRecord.columnsArray)
                                                  .excludes("id")
                                                  .exp("contractCount","range")
                                                  .exp("createTime","timeRange")
                                                  .exp("mealPrice","range")
                                })
                                .controller(controller => {
                                        controller.path("/userPurchaseRecord");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })

                                .build()
                ]
}
