const { userCompanyInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userCompanyInfoConfig = {
        table: userCompanyInfo,
        name: "UserCompanyInfo",
                items: [

                        // add
                        // authFile : validate --- @Path  
                        // contactPhone : validate --- @Phone  
                        // createTime excluded 
                        // id excluded 
                        // verifyState : validate --- @Enum("verifyState")
                        new builder()
                                .type("insert")
                                .id("addUserCompanyInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("authFile","@Path")
                                           .validate("contactPhone","@Phone")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserCompanyInfoById")
                                .alias("t")
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
                        // authFile : validate --- @Path  
                        // contactPhone : validate --- @Phone  
                        // createTime : excluded 
                        // verifyState : validate --- @Enum("verifyState")
                        new builder()
                                .type("update")
                                .id("updateUserCompanyInfoById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("authFile","@Path")
                                           .validate("contactPhone","@Phone")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserCompanyInfoById")
                                .alias("t")
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
                        // authFile : excluded 
                        // companyName : excluded 
                        // contactPhone : validates --- @Phone  
                        // createTime : expression --- timeRange
                        // idCardPicBack : excluded 
                        // idCardPicFront : excluded 
                        // licensePicFront : excluded 
                        // verifyState : validates --- @Enum("verifyState")
                        new builder()
                                .type("select")
                                .id("getUserCompanyInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userCompanyInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userCompanyInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["authFile","companyName","idCardPicBack","idCardPicFront","licensePicFront"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userCompanyInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contactPhone","@Phone")
                                           .validate("verifyState","@Enum(\"verifyState\")")
                                })

                                .build()
                ]
}
