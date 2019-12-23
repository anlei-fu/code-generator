const { systemContractTemplate } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.systemContractTemplateConfig = {
        table: systemContractTemplate,
        name: "SystemContractTemplate",
                items: [

                        // add
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addSystemContractTemplate")
                                .includes(collection => {
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteSystemContractTemplateById")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                        // updateById
                        // contractType : validate --- @Enum(contractType)  
                        // contractFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateSystemContractTemplateById")
                                .includes(collection => {
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{id}");
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
                                           .validate("contractFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getSystemContractTemplateById")
                                .includes(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/systemContractTemplate/{id}");
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
                        // contractName : excluded 
                        // contractFile : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(systemContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["contractName","contractFile"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getSystemContractTemplateList")
                                .controller(controller => {
                                        controller.path("/systemContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("contractType","@Enum(contractType)")
                                })
                                .build()
                ]
}