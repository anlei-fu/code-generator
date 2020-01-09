const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
                items: [

                        // add
                        // createTime excluded 
                        // curveId excluded 
                        // isDelete : validate --- @NotNull  
                        // status : validate --- @Enum("status")  
                        // trackDisType : validate --- @Enum("trackDisType")  
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addCurveInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["createTime","curveId","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("isDelete","@NotNull")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteCurveInfoByCurveId")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("curveId")
                                                  .require("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // status : validate --- @Enum("status")  
                        // trackDisType : validate --- @Enum("trackDisType")  
                        // updateTime : excluded
                        new builder()
                                .type("update")
                                .id("updateCurveInfoByCurveId")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("curveId")
                                                  .require("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getCurveInfoByCurveId")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("curveId")
                                                  .require("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo/{curveId}");
                                })
                                .req(req => {
                                        req.name("curveId")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .resp(resp => {
                                        resp.single();
                                })
                                .build(),

                        // getList
                        // averageSpeed : expression --- range
                        // createTime : expression --- timeRange
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // trackDisType : validates --- @Enum("trackDisType")
                        new builder()
                                .type("select")
                                .id("getCurveInfoList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["remark"])
                                                  .exp("averageSpeed","range")
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                })

                                .build()
                ]
}
