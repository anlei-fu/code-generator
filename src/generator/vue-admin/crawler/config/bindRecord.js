/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.bindRecordConfig = {
        table: all.bindRecord,
        name: "BindRecord",
                items: [
// getPage
                        // createTime : expression --- timeRange
                        // msg : excluded 
                        // bindStatus : validates --- @Enum("bindStatus")
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.bindRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.bindRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["msg",])
                                                  .exp("createTime","timeRange")
                                })
                                .request(request => {
                                        request.path("/bindRecord/page")
                                               .description("get bindRecord page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("bindStatus","@Enum(\"bindStatus\")")
                                           .name("GetBindRecordPageReq")
                                })
                   
                                .build(),

                        
 ]
}
