const { domainModel } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.domainModelConfig = {
        table: domainModel,
        name: "DomainModel",
                items: [

                        // add
                        // id excluded 
                        // taskId : validate --- @NotNull  
                        // domainId : validate --- @NotNull
                        new builder()
                                .type("insert")
                                .id("addDomainModel")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id"])
                                })
                                .controller(controller => {
                                        controller.path("/domainModel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskId","@NotNull")
                                           .validate("domainId","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDomainModelById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        new builder()
                                .type("update")
                                .id("updateDomainModelById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDomainModelById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/domainModel/{id}");
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
                        new builder()
                                .type("select")
                                .id("getDomainModelList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(domainModel.columnsArray)
                                                  .excludes("id")

                                })
                                .controller(controller => {
                                        controller.path("/domainModel");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                })
                                .build()
                ]
}
