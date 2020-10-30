/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteUrlBloomConfig = {
        table: all.siteUrlBloom,
        name: "SiteUrlBloom",
                items: [
                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteUrlBloom.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("/siteUrlBloom/{id}")
                                                .description("get single siteUrlBloom");;
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
                        // bloom : excluded 
                        // bloomLoadingStatus : validates --- @Enum("bloomLoadingStatus")  
                        // totalCount : excluded 
                        // lastLoadingTime : excluded 
                        // lastDumpTime : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteUrlBloom.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.siteUrlBloom.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["bloom","totalCount","lastLoadingTime","lastDumpTime",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/siteUrlBloom/page")
                                               .description("get siteUrlBloom page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("bloomLoadingStatus","@Enum(\"bloomLoadingStatus\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetSiteUrlBloomPageReq")
                                })
                   
                                .build(),

                        
 ]
}
