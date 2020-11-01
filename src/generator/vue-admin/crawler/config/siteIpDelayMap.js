/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.siteIpDelayMapConfig = {
        table: all.siteIpDelayMap,
        name: "SiteIpDelayMap",
                items: [
// getPage
                        // delayTimeoutTime : excluded 
                        // ip : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.siteIpDelayMap.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.siteIpDelayMap.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["delayTimeoutTime","ip",])
                                })
                                .request(request => {
                                        request.path("/siteIpDelayMap/page")
                                               .description("get siteIpDelayMap page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")

                                           .name("GetSiteIpDelayMapPageReq")
                                })
                   
                                .build(),

                        
 ]
}
