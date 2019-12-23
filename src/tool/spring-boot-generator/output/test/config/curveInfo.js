const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builder")


exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
                items: [

                        // add
                        // curveId validate : @NotNull  
                        // isDelete validate : @NotNull  
                        // createTime excluded 
                        // updateTime excluded
                        new builder()
                                .type("insert")
                                .id("addCurveInfo")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["createTime","updateTime"])

                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("curveId","@NotNull")
                                           .validate("isDelete","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteCurveInfoByCurveId")
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
                        // trackDisType validate : @Enum(trackDisType)  
                        // status validate : @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateCurveInfoByCurveId")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")

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
                                           .validate("trackDisType","@Enum(trackDisType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getCurveInfoByCurveId")
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
                        // trackDisType validate : @Enum(trackDisType)  
                        // remark excluded 
                        // status validate : @Enum(status)  
                        // createTime expression : timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                                  .excludes("curveId")
                                                  .excludes(["remark"])
                                                  .expression("createTime","timeRange")

                                })
                                .id("getCurveInfoList")
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("curveId")
                                           .validate("trackDisType","@Enum(trackDisType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}