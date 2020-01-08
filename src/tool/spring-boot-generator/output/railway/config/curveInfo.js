const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
                items: [

                        // add
                        // curveId excluded 
                        // trackDisType : validate --- @Enum("trackDisType")  
                        // status : validate --- @Enum("status")  
                        // isDelete : validate --- @NotNull  
                        // createTime excluded 
                        // updateTime excluded@@
                        new builder()
                                .type("insert")
                                .id("addCurveInfo")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["curveId","createTime","updateTime"])
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                           .validate("status","@Enum(\"status\")")
                                           .validate("isDelete","@NotNull")
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
                        // trackDisType : validate --- @Enum("trackDisType")  
                        // status : validate --- @Enum("status")  
                        // createTime : excluded 
                        // updateTime : excluded@@
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
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                           .validate("status","@Enum(\"status\")")
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
                        // trackDisType : validates --- @Enum("trackDisType")  
                        // averageSpeed : expression --- range
                        // remark : excluded 
                        // status : validates --- @Enum("status")  
                        // createTime : expression --- timeRange@@
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
                                           .validate("trackDisType","@Enum(\"trackDisType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build()
                ]
}
