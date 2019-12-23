const { userContractTemplate } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userContractTemplateConfig = {
        table: userContractTemplate,
        name: "UserContractTemplate",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserContractTemplate")
                                .includes(collection => {
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userContractTemplate");
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
                                .id("deleteUserContractTemplateById")
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
                        // belongType : validate --- @Enum(belongType)  
                        // contractFile : validate --- @Path
                        new builder()
                                .type("update")
                                .id("updateUserContractTemplateById")
                                .includes(collection => {
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")

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
                                           .validate("belongType","@Enum(belongType)")
                                           .validate("contractFile","@Path")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserContractTemplateById")
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
                        // belongType : validates --- @Enum(belongType)  
                        // contractName : excluded 
                        // contractFile : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userContractTemplate.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userContractTemplate.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["contractName","contractFile"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserContractTemplateList")
                                .controller(controller => {
                                        controller.path("/userContractTemplate");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(belongType)")
                                })
                                .build()
                ]
}