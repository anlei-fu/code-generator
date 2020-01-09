const { systemContractTemplate } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemContractTemplateConfig = {
        table: systemContractTemplate,
        name: "SystemContractTemplate",
                items: [

                        // add
                        // contractFile : validate --- @Path  
                        // contractType : validate --- @Enum("contractType")  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addSystemContractTemplate")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("contractFile")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("contractFile")
                                           .validate("contractFile","@Path")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemContractTemplateByContractFile")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("contractFile")
                                                  .require("contractFile")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{contractFile}");
                                })
                                .req(req => {
                                        req.name("contractFile")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // contractFile : validate --- @Path  
                        // contractType : validate --- @Enum("contractType")  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateSystemContractTemplateByContractFile")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("contractFile")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("contractFile")
                                                  .require("contractFile")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{contractFile}");
                                })
                                .req(req => {
                                        req.name("contractFile")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("contractFile")
                                           .validate("contractFile","@Path")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSystemContractTemplateByContractFile")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("contractFile")
                                                  .require("contractFile")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{contractFile}");
                                })
                                .req(req => {
                                        req.name("contractFile")
                                           .type("String")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // contractFile : excluded 
                        // contractName : excluded 
                        // contractType : validates --- @Enum("contractType")  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getSystemContractTemplateList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("contractFile")
                                                  .excludes(["contractFile","contractName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("contractFile")
                                           .validate("contractType","@Enum(\"contractType\")")
                                })

                                .build()
                ]
}
