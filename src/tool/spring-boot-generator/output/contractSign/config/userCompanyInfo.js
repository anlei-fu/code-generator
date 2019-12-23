const { userCompanyInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userCompanyInfoConfig = {
        table: userCompanyInfo,
        name: "UserCompanyInfo",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserCompanyInfo")
                                .includes(collection => {
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo");
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
                                .id("deleteUserCompanyInfoById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // contactPhone : validate --- @Phone  
                        // verifyState : validate --- @Enum(verifyState)  
                        // authFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateUserCompanyInfoById")
                                .includes(collection => {
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contactPhone","@Phone")
                                           .validate("verifyState","@Enum(verifyState)")
                                           .validate("authFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserCompanyInfoById")
                                .includes(collection=>{
                                        collection.includes(userCompanyInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo/{id}");
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
                        // companyName : excluded 
                        // contactPhone : validates --- @Phone  
                        // idCardPicFront : excluded 
                        // idCardPicBack : excluded 
                        // licensePicFront : excluded 
                        // verifyState : validates --- @Enum(verifyState)  
                        // authFile : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userCompanyInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["companyName","idCardPicFront","idCardPicBack","licensePicFront","authFile"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserCompanyInfoList")
                                .controller(controller => {
                                        controller.path("/userCompanyInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contactPhone","@Phone")
                                           .validate("verifyState","@Enum(verifyState)")
                                })
                                .build()
                ]
}