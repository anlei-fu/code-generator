/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.crawlTaskConfig = {
        table: all.crawlTask,
        name: "CrawlTask",
                items: [
// getPage
                        // taskTimeoutTime : excluded 
                        // taskStatus : validates --- @Enum("taskStatus")  
                        // taskExecuteResultType : validates --- @Enum("taskExecuteResultType")  
                        // bindLastStatus : validates --- @Enum("bindLastStatus")  
                        // bindLastMsg : excluded 
                        // bindLastTime : excluded 
                        // bindCount : excluded 
                        // dispatchStatus : validates --- @Enum("dispatchStatus")  
                        // dispatchTime : excluded 
                        // dispatchMsg : excluded 
                        // cookie : excluded 
                        // taskStartTime : excluded 
                        // taskFinishTime : excluded 
                        // successUrlCount : excluded 
                        // urlFailedCount : excluded 
                        // urlNewCount : excluded 
                        // urlBadCount : excluded 
                        // averageSpeedOfAll : excluded 
                        // averageSpeedOfSuccess : excluded 
                        // meanSpeedOfSuccess : excluded 
                        // maxSpeedOfSuccess : excluded 
                        // enableStatus : validates --- @Enum("enableStatus")  
                        // createTime : expression --- timeRange
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.crawlTask.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.crawlTask.columnsArray)
                                                  .excludes("id")
                                                  .excludes([
                                                          "taskTimeoutTime",
                                                          "bindLastMsg",
                                                          "bindLastTime",
                                                          "bindCount",
                                                          "dispatchTime",
                                                          "dispatchMsg",
                                                          "cookie",
                                                          "taskStartTime",
                                                          "taskFinishTime",
                                                          "successUrlCount",
                                                          "urlFailedCount",
                                                          "urlNewCount",
                                                          "urlBadCount",
                                                          "averageSpeedOfAll",
                                                          "averageSpeedOfSuccess",
                                                          "meanSpeedOfSuccess",
                                                          "maxSpeedOfSuccess",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/crawlTask/page")
                                               .description("get crawlTask page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("taskStatus","@Enum(\"taskStatus\")")
                                           .validate("taskExecuteResultType","@Enum(\"taskExecuteResultType\")")
                                           .validate("bindLastStatus","@Enum(\"bindLastStatus\")")
                                           .validate("dispatchStatus","@Enum(\"dispatchStatus\")")
                                           .validate("enableStatus","@Enum(\"enableStatus\")")
                                           .name("GetCrawlTaskPageReq")
                                })
                   
                                .build(),

                        
 ]
}
