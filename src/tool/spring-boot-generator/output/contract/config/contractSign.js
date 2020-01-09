const { contractSign } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractSignConfig = {
        table: contractSign,
        name: "ContractSign",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // notifyEmail : validate --- @Email  
                        // notifyPhone : validate --- @Phone  
                        // signIp : validate --- @Ip  
                        // signStatus : validate --- @Enum("signStatus")  
                        // signUrl : validate --- @Url  
                        // subjectType : validate --- @Enum("subjectType")
                        new builder()
                                .type("insert")
                                .id("addContractSign")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/contractSign");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notifyEmail","@Email")
                                           .validate("notifyPhone","@Phone")
                                           .validate("signIp","@Ip")
                                           .validate("signStatus","@Enum(\"signStatus\")")
                                           .validate("signUrl","@Url")
                                           .validate("subjectType","@Enum(\"subjectType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteContractSignById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSign/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // notifyEmail : validate --- @Email  
                        // notifyPhone : validate --- @Phone  
                        // signIp : validate --- @Ip  
                        // signStatus : validate --- @Enum("signStatus")  
                        // signUrl : validate --- @Url  
                        // subjectType : validate --- @Enum("subjectType")
                        new builder()
                                .type("update")
                                .id("updateContractSignById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSign/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notifyEmail","@Email")
                                           .validate("notifyPhone","@Phone")
                                           .validate("signIp","@Ip")
                                           .validate("signStatus","@Enum(\"signStatus\")")
                                           .validate("signUrl","@Url")
                                           .validate("subjectType","@Enum(\"subjectType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractSignById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(contractSign.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractSign/{id}");
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
                        // createTime : expression --- timeRange
                        // notifyCount : expression --- range
                        // notifyEmail : validates --- @Email  
                        // notifyPhone : validates --- @Phone  
                        // shortMsg : excluded 
                        // signIp : excluded 
                        // signPerson : excluded 
                        // signStatus : validates --- @Enum("signStatus")  
                        // signSubject : excluded 
                        // signUrl : excluded 
                        // subjectType : validates --- @Enum("subjectType")
                        new builder()
                                .type("select")
                                .id("getContractSignList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(contractSign.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["shortMsg","signIp","signPerson","signSubject","signUrl"])
                                                  .exp("createTime","timeRange")
                                                  .exp("notifyCount","range")
                                })
                                .controller(controller => {
                                        controller.path("/contractSign");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("notifyEmail","@Email")
                                           .validate("notifyPhone","@Phone")
                                           .validate("signStatus","@Enum(\"signStatus\")")
                                           .validate("subjectType","@Enum(\"subjectType\")")
                                })

                                .build()
                ]
}
