const { userContactInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userContactInfoConfig = {
        table: userContactInfo,
        name: "UserContactInfo",
                items: [

                        // add
                        // id : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addUserContactInfo")
                                .includes(collection => {
                                        collection.includes(userContactInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/userContactInfo");
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
                                .id("deleteUserContactInfoById")
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
                        // contractPhone : validate --- @Phone  
                        // contractEmail : validate --- @Email
                        new builder()
                                .type("update")
                                .id("updateUserContactInfoById")
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
                                           .validate("contractPhone","@Phone")
                                           .validate("contractEmail","@Email")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserContactInfoById")
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
                        // contractName : excluded 
                        // contractPhone : validates --- @Phone  
                        // contractEmail : validates --- @Email
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userContactInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userContactInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["contractName"])
                                })
                                .id("getUserContactInfoList")
                                .controller(controller => {
                                        controller.path("/userContactInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractPhone","@Phone")
                                           .validate("contractEmail","@Email")
                                })
                                .build()
                ]
}