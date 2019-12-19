const { curveInfo } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.curveInfoConfig = {
        table: curveInfo,
        name: "CurveInfo",
                items: [
                        
                        // add
                        new builder()
                                .type("insert")
                                .id("addCurveInfo")
                                .includes(collection => {
                                        collection.includes(curveInfo.columnsArray)
                                         .excludes("curveId")
                                })
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                }).req(req => {
                                        req.doCreate()
                                                .excludes("curveId");
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
                                                .excludes("curveId");
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
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(curveInfo.columnsArray)
                                         .excludes("curveId")
                                })
                                .id("getCurveInfoList")
                                .controller(controller => {
                                        controller.path("/curveInfo");
                                })
                                .req(req => {
                                        req.doCreate()
                                                .excludes("curveId");
                                })
                                .build()
                ]
}