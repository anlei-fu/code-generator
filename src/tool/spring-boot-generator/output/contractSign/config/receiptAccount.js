const { receiptAccount } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.receiptAccountConfig = {
        table: receiptAccount,
        name: "ReceiptAccount",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addReceiptAccount")
                                .includes(collection => {
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount");
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
                                .id("deleteReceiptAccountById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // accountType : validate --- @Enum(accountType)  
                        // certPath : validate --- @Path  
                        // certPwd : validate --- @Password  
                        // authRedirectUrl : validate --- @Url  
                        // payRedirectUrl : validate --- @Url  
                        // payCallbackUrl : validate --- @Url  
                        // refundCallbackUrl : validate --- @Url  
                        // status : validate --- @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateReceiptAccountById")
                                .includes(collection => {
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(accountType)")
                                           .validate("certPath","@Path")
                                           .validate("certPwd","@Password")
                                           .validate("authRedirectUrl","@Url")
                                           .validate("payRedirectUrl","@Url")
                                           .validate("payCallbackUrl","@Url")
                                           .validate("refundCallbackUrl","@Url")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getReceiptAccountById")
                                .includes(collection=>{
                                        collection.includes(receiptAccount.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount/{id}");
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
                        // accountType : validates --- @Enum(accountType)  
                        // accountName : excluded 
                        // certPath : excluded 
                        // certPwd : validates --- @Password  
                        // authRedirectUrl : excluded 
                        // payRedirectUrl : excluded 
                        // payCallbackUrl : excluded 
                        // refundCallbackUrl : excluded 
                        // status : validates --- @Enum(status)  
                        // remark : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(receiptAccount.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["accountName","certPath","authRedirectUrl","payRedirectUrl","payCallbackUrl","refundCallbackUrl","remark"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getReceiptAccountList")
                                .controller(controller => {
                                        controller.path("/receiptAccount");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(accountType)")
                                           .validate("certPwd","@Password")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}