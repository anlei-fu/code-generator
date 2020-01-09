const { receiptAccount } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.receiptAccountConfig = {
        table: receiptAccount,
        name: "ReceiptAccount",
                items: [

                        // add
                        // accountType : validate --- @Enum("accountType")  
                        // authRedirectUrl : validate --- @Url  
                        // certPath : validate --- @Path  
                        // certPwd : validate --- @Password  
                        // createTime excluded 
                        // id excluded 
                        // payCallbackUrl : validate --- @Url  
                        // payRedirectUrl : validate --- @Url  
                        // refundCallbackUrl : validate --- @Url  
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("insert")
                                .id("addReceiptAccount")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("authRedirectUrl","@Url")
                                           .validate("certPath","@Path")
                                           .validate("certPwd","@Password")
                                           .validate("payCallbackUrl","@Url")
                                           .validate("payRedirectUrl","@Url")
                                           .validate("refundCallbackUrl","@Url")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteReceiptAccountById")
                                .alias("t")
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
                        // accountType : validate --- @Enum("accountType")  
                        // authRedirectUrl : validate --- @Url  
                        // certPath : validate --- @Path  
                        // certPwd : validate --- @Password  
                        // createTime : excluded 
                        // payCallbackUrl : validate --- @Url  
                        // payRedirectUrl : validate --- @Url  
                        // refundCallbackUrl : validate --- @Url  
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateReceiptAccountById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("authRedirectUrl","@Url")
                                           .validate("certPath","@Path")
                                           .validate("certPwd","@Password")
                                           .validate("payCallbackUrl","@Url")
                                           .validate("payRedirectUrl","@Url")
                                           .validate("refundCallbackUrl","@Url")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getReceiptAccountById")
                                .alias("t")
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
                        // accountName : excluded 
                        // accountType : validates --- @Enum("accountType")  
                        // authRedirectUrl : excluded 
                        // certPath : excluded 
                        // certPwd : excluded 
                        // createTime : expression --- timeRange
                        // payCallbackUrl : excluded 
                        // payRedirectUrl : excluded 
                        // privateKey : excluded 
                        // publicKey : excluded 
                        // refundCallbackUrl : excluded 
                        // remark : excluded 
                        // signKey : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getReceiptAccountList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(receiptAccount.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(receiptAccount.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["accountName","authRedirectUrl","certPath","certPwd","payCallbackUrl","payRedirectUrl","privateKey","publicKey","refundCallbackUrl","remark","signKey"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/receiptAccount");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("accountType","@Enum(\"accountType\")")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
