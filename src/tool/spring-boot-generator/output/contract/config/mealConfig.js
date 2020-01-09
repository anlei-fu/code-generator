const { mealConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.mealConfigConfig = {
        table: mealConfig,
        name: "MealConfig",
                items: [

                        // add
                        // createTime excluded 
                        // id excluded 
                        // mealType : validate --- @Enum("mealType")  
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("insert")
                                .id("addMealConfig")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mealType","@Enum(\"mealType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteMealConfigById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // createTime : excluded 
                        // mealType : validate --- @Enum("mealType")  
                        // status : validate --- @Enum("status")
                        new builder()
                                .type("update")
                                .id("updateMealConfigById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mealType","@Enum(\"mealType\")")
                                           .validate("status","@Enum(\"status\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getMealConfigById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(mealConfig.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig/{id}");
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

                        // getList
                        // createTime : expression --- timeRange
                        // discount : expression --- range
                        // mealName : excluded 
                        // mealType : validates --- @Enum("mealType")  
                        // price : expression --- range
                        // remark : excluded 
                        // status : validates --- @Enum("status")
                        new builder()
                                .type("select")
                                .id("getMealConfigList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(mealConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["mealName","remark"])
                                                  .exp("createTime","timeRange")
                                                  .exp("discount","range")
                                                  .exp("price","range")
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mealType","@Enum(\"mealType\")")
                                           .validate("status","@Enum(\"status\")")
                                })

                                .build()
                ]
}
