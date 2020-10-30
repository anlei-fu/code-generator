/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.downSystemConfig = {
        table: all.downSystem,
        name: "DownSystem",
                items: [
                        // add
                        // id excluded 
                        // priority : validate --- @NotNull  
                        // dataUrl : validate --- @Url  
                        // taskMaxRunningCount : validate --- @NotNull  
                        // taskCurrentRunningCount : validate --- @NotNull  
                        // enableStatus : validate --- @NotNull  @Enum("enableStatus")  
                        // createTime excluded
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.downSystem.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "id",
                                                          "createTime",
                                                          "taskCurrentRunningCount",
	"urlTotalCount",
	"urlFinishedCount",
	"urlBadCount",
                                                        ])
                                })
                                .request(request => {
                                        request.path("/downSystem")
                                               .description("add downSystem");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("priority","@NotNull")
                                           .validate("taskMaxRunningCount","@NotNull")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                })
                                .build(),

                        // deleteById
                        new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/downSystem/{id}")
                                               .description("delete single downSystem");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                              // updateById
                        // dataUrl : validate --- @Url  
                        // enableStatus : validate --- @Enum("enableStatus")  
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("update")
                                .id("updateById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.downSystem.columnsArray)
                                                  .excludes("id")
                                                  .list("id")
                                                  .excludes(["createTime",])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/downSystem/{id}")
                                               .description("update single downSystem");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dataUrl","@Url")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("UpdateDownSystemReq")                                                
                                })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.downSystem.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/downSystem/{id}")
                                                .description("get single downSystem");;
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

// getPage
                        // name : excluded 
                        // priority : excluded 
                        // description : excluded 
                        // appKey : excluded 
                        // appSecret : excluded 
                        // dataUrl : excluded 
                        // dataQueue : excluded 
                        // taskMaxRunningCount : excluded 
                        // taskCurrentRunningCount : excluded 
                        // urlTotalCount : excluded 
                        // urlFinishedCount : excluded 
                        // urlBadCount : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.downSystem.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.downSystem.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "name",
                                                          "priority",
                                                          "description",
                                                          "appKey",
                                                          "appSecret",
                                                          "dataUrl",
                                                          "dataQueue",
                                                          "taskMaxRunningCount",
                                                          "taskCurrentRunningCount",
                                                          "urlTotalCount",
                                                          "urlFinishedCount",
                                                          "urlBadCount",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/downSystem/page")
                                               .description("get downSystem page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetDownSystemPageReq")
                                })
                   
                                .build(),

                        
 ]
}
