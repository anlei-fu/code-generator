const { contractMain } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractMainConfig = {
        table: contractMain,
        name: "ContractMain",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addContractMain")
                                .includes(collection => {
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/contractMain");
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
                                .id("deleteContractMainById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractMain/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // contractType : validate --- @Enum(contractType)  
                        // rawContractFile : validate --- @Path  
                        // contractState : validate --- @Enum(contractState)  
                        // signContractFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateContractMainById")
                                .includes(collection => {
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractMain/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(contractType)")
                                           .validate("rawContractFile","@Path")
                                           .validate("contractState","@Enum(contractState)")
                                           .validate("signContractFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractMainById")
                                .includes(collection=>{
                                        collection.includes(contractMain.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/contractMain/{id}");
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
                        // contractType : validates --- @Enum(contractType)  
                        // rawContractFile : excluded 
                        // contractState : validates --- @Enum(contractState)  
                        // signContractFile : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(contractMain.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["rawContractFile","signContractFile"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getContractMainList")
                                .controller(controller => {
                                        controller.path("/contractMain");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(contractType)")
                                           .validate("contractState","@Enum(contractState)")
                                })
                                .build()
                ]
}