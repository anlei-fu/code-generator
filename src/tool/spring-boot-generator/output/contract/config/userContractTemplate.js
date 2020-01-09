const { userContractTemplate } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userContractTemplateConfig = {
        table: userContractTemplate,
        name: "UserContractTemplate",
                items: [

                        // add
                        // belongType : validate --- @Enum("belongType")  
                        // contractFile : validate --- @Path  
                        // createTime excluded 
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addUserContractTemplate")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                           .validate("contractFile","@Path")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserContractTemplateById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // belongType : validate --- @Enum("belongType")  
                        // contractFile : validate --- @Path  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateUserContractTemplateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                           .validate("contractFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserContractTemplateById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userContractTemplate.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate/{id}");
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
                        // belongType : validates --- @Enum("belongType")  
                        // contractFile : excluded 
                        // contractName : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .id("getUserContractTemplateList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userContractTemplate.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["contractFile","contractName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                })

                                .build()
                ]
}
