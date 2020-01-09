const { detectGroup } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.detectGroupConfig = {
        table: detectGroup,
        name: "DetectGroup",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addDetectGroup")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteDetectGroupById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateDetectGroupById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getDetectGroupById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup/{id}");
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
                        // groupName : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getDetectGroupList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(detectGroup.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["groupName"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/detectGroup");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
