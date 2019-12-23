const { contractSign } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractSignConfig = {
        table: contractSign,
        name: "ContractSign",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addContractSign")
                                .includes(collection => {
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/contractSign");
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
                                .id("deleteContractSignById")
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
                        // subjectType : validate --- @Enum(subjectType)  
                        // signStatus : validate --- @Enum(signStatus)  
                        // notifyPhone : validate --- @Phone  
                        // notifyEmail : validate --- @Email  
                        // signUrl : validate --- @Url  
                        // signIp : validate --- @Ip
                        new builder()
                                .type("update")
                                .id("updateContractSignById")
                                .includes(collection => {
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")

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
                                           .validate("subjectType","@Enum(subjectType)")
                                           .validate("signStatus","@Enum(signStatus)")
                                           .validate("notifyPhone","@Phone")
                                           .validate("notifyEmail","@Email")
                                           .validate("signUrl","@Url")
                                           .validate("signIp","@Ip")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractSignById")
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
                        // subjectType : validates --- @Enum(subjectType)  
                        // signStatus : validates --- @Enum(signStatus)  
                        // notifyPhone : validates --- @Phone  
                        // notifyEmail : validates --- @Email  
                        // shortMsg : excluded 
                        // signUrl : excluded 
                        // signIp : validates --- @Ip  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(contractSign.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractSign.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["shortMsg","signUrl"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getContractSignList")
                                .controller(controller => {
                                        controller.path("/contractSign");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("subjectType","@Enum(subjectType)")
                                           .validate("signStatus","@Enum(signStatus)")
                                           .validate("notifyPhone","@Phone")
                                           .validate("notifyEmail","@Email")
                                           .validate("signIp","@Ip")
                                })
                                .build()
                ]
}