/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteIpBlockMapConfig = {
        table: all.siteIpBlockMap,
        name: "SiteIpBlockMap",
                items: [
// getPage
                        // ip : excluded 
                        // createTime : expression --- timeRange
                        // blockTimeout : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteIpBlockMap.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.siteIpBlockMap.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["ip","blockTimeout",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/siteIpBlockMap/page")
                                               .description("get siteIpBlockMap page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetSiteIpBlockMapPageReq")
                                })
                   
                                .build(),

                        
 ]
}
