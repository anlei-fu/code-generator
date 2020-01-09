const { userContactInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userContactInfoConfig = {
        table: userContactInfo,
        name: "UserContactInfo",
                items: [

                        // add
                        // contractEmail : validate --- @Email  
                        // contractPhone : validate --- @Phone  
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addUserContactInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userContactInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractEmail","@Email")
                                           .validate("contractPhone","@Phone")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserContactInfoById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // contractEmail : validate --- @Email  
                        // contractPhone : validate --- @Phone
                        new builder()
                                .type("update")
                                .id("updateUserContactInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userContactInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractEmail","@Email")
                                           .validate("contractPhone","@Phone")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserContactInfoById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userContactInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo/{id}");
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
                        // contractEmail : validates --- @Email  
                        // contractName : excluded 
                        // contractPhone : validates --- @Phone
                        new builder()
                                .type("select")
                                .id("getUserContactInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userContactInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userContactInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["contractName"])
                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractEmail","@Email")
                                           .validate("contractPhone","@Phone")
                                })

                                .build()
                ]
}
