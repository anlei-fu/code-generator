/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 8:47:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.dispatchTaskRecordConfig = {
        table: all.dispatchTaskRecord,
        name: "DispatchTaskRecord",
                items: [
// getPage
                        // dispatchStatus : validates --- @Enum("dispatchStatus")  
                        // dispatchMsg : excluded 
                        // createTime : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.dispatchTaskRecord.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.dispatchTaskRecord.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["dispatchMsg","createTime",])
                                })
                                .request(request => {
                                        request.path("/dispatchTaskRecord/page")
                                               .description("get dispatchTaskRecord page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("dispatchStatus","@Enum(\"dispatchStatus\")")
                                           .name("GetDispatchTaskRecordPageReq")
                                })
                   
                                .build(),

                        
 ]
}
