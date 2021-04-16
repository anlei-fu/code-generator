/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:17 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { all } = require("./../db/all")
const { ConfigItemBuilder } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/ConfigItemBuilder")


exports.fieldInfoConfig = {
        table: all.fieldInfo,
        name: "FieldInfo",
                items: [
                        // add
                        // filterType : validate --- @Enum("FilterType")  
                        // formatType : validate --- @Enum("FormatType")  
                        // id excluded 
                        // isName : validate --- @Enum("YesNo")  
                        // isPk : validate --- @Enum("YesNo")  
                        // tableId : validate --- @NotNull
                        new ConfigItemBuilder()
                                .type("insert")
                                .id("add")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.fieldInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id",])
                                })
                                .request(request => {
                                        request.path("")
                                               .description("add fieldInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("filterType","@Enum(\"FilterType\")")
                                           .validate("formatType","@Enum(\"FormatType\")")
                                           .validate("isName","@Enum(\"YesNo\")")
                                           .validate("isPk","@Enum(\"YesNo\")")
                                           .validate("tableId","@NotNull")
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
                                        request.path("{id}")
                                               .description("delete single fieldInfo");;
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),

                                                              // delete batch
                                new ConfigItemBuilder()
                                .type("delete")
                                .id("deleteBatch")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                                  .list("id")
                                })
                                .request(request => {
                                        request.path("delete-batch")
                                               .description("bacth delete fieldInfo");;
                                })
                                .req(req => {
                                        req.name("ids")
                                           .type("Integer")
                                           .list();
                                })
                                .build(),

// updateById
                        // filterType : validate --- @Enum("FilterType")  
                        // formatType : validate --- @Enum("FormatType")  
                        // isName : validate --- @Enum("YesNo")  
                        // isPk : validate --- @Enum("YesNo")
                        new ConfigItemBuilder()
                                .type("update")
                                .id("update")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.fieldInfo.columnsArray)
                                                  .list("id")

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("")
                                               .description("update single fieldInfo");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("filterType","@Enum(\"FilterType\")")
                                           .validate("formatType","@Enum(\"FormatType\")")
                                           .validate("isName","@Enum(\"YesNo\")")
                                           .validate("isPk","@Enum(\"YesNo\")")
                                           .name("UpdateFieldInfoReq")                                                
                                })
                                .build(),

// updateBatch
                                                        // filterType : validate --- @Enum("FilterType")  
                        // formatType : validate --- @Enum("FormatType")  
                        // isName : validate --- @Enum("YesNo")  
                        // isPk : validate --- @Enum("YesNo")
                                new ConfigItemBuilder()
                                .type("update")
                                .id("updateBatch")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(all.fieldInfo.columnsArray)
                                .excludes("id")

                                 })
                                 .conditions(collection => {
                                        collection.includes("id")
                                        .require("id")
                                        .list("id");
                                })
                                .request(request => {
                                        request.path("update-batch")
                                               .description("update fieldInfo batch");;
                                 })
                                .req(req => {
                                        req.doCreate()
                                           .validate("filterType","@Enum(\"FilterType\")")
                                           .validate("formatType","@Enum(\"FormatType\")")
                                           .validate("isName","@Enum(\"YesNo\")")
                                           .validate("isPk","@Enum(\"YesNo\")")
                                .name("UpdateFieldInfoBatchReq")                                                
                                 })
                                .build(),

                        // getById
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.fieldInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .request(request => {
                                        request.path("{id}")
                                                .description("get single fieldInfo");;
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
                        // filterType : validates --- @Enum("FilterType")  
                        // formatType : validates --- @Enum("FormatType")  
                        // id : excluded 
                        // isName : excluded 
                        // isPk : excluded
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getPage")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.fieldInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(all.fieldInfo.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["id","isName","isPk",])
                                })
                                .request(request => {
                                        request.path("/page")
                                               .description("get fieldInfo page");;
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("filterType","@Enum(\"FilterType\")")
                                           .validate("formatType","@Enum(\"FormatType\")")
                                           .name("GetFieldInfoPageReq")
                                })
                   
                                .build(),

                        
 ]
}
