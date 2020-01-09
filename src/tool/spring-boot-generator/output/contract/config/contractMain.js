const { contractMain } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.contractMainConfig = {
        table: contractMain,
        name: "ContractMain",
                items: [

                        // add
                        // contractState : validate --- @Enum("contractState")  
                        // contractType : validate --- @Enum("contractType")  
                        // createTime excluded 
                        // id excluded 
                        // rawContractFile : validate --- @Path  
                        // signContractFile : validate --- @Path
                        new builder()
                                .type("insert")
                                .id("addContractMain")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/contractMain");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractState","@Enum(\"contractState\")")
                                           .validate("contractType","@Enum(\"contractType\")")
                                           .validate("rawContractFile","@Path")
                                           .validate("signContractFile","@Path")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteContractMainById")
                                .alias("t")
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
                        // contractState : validate --- @Enum("contractState")  
                        // contractType : validate --- @Enum("contractType")  
                        // createTime : excluded 
                        // rawContractFile : validate --- @Path  
                        // signContractFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateContractMainById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

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
                                           .validate("contractState","@Enum(\"contractState\")")
                                           .validate("contractType","@Enum(\"contractType\")")
                                           .validate("rawContractFile","@Path")
                                           .validate("signContractFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getContractMainById")
                                .alias("t")
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
                        // contractPrice : expression --- range
                        // contractState : validates --- @Enum("contractState")  
                        // contractType : validates --- @Enum("contractType")  
                        // createTime : expression --- timeRange
                        // rawContractFile : excluded 
                        // rawContractHash : excluded 
                        // signContractFile : excluded 
                        // signContractHash : excluded
                        new builder()
                                .type("select")
                                .id("getContractMainList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(contractMain.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(contractMain.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["rawContractFile","rawContractHash","signContractFile","signContractHash"])
                                                  .exp("contractPrice","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/contractMain");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractState","@Enum(\"contractState\")")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })

                                .build()
                ]
}
