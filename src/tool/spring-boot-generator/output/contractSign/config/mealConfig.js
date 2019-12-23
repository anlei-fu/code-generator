const { mealConfig } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.mealConfigConfig = {
        table: mealConfig,
        name: "MealConfig",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addMealConfig")
                                .includes(collection => {
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/mealConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("id","@NotNull")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteMealConfigById")
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
                        // mealType : validate --- @Enum(mealType)  
                        // status : validate --- @Enum(status)
                        new builder()
                                .type("update")
                                .id("updateMealConfigById")
                                .includes(collection => {
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")

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
                                           .validate("mealType","@Enum(mealType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getMealConfigById")
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
                        // mealName : excluded 
                        // mealType : validates --- @Enum(mealType)  
                        // remark : excluded 
                        // price : expression --- range
                        // discount : expression --- range
                        // status : validates --- @Enum(status)  
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(mealConfig.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(mealConfig.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["mealName","remark"])
                                                  .expression("price","range")
                                                  .expression("discount","range")
                                                  .expression("createTime","timeRange")
                                })
                                .id("getMealConfigList")
                                .controller(controller => {
                                        controller.path("/mealConfig");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("mealType","@Enum(mealType)")
                                           .validate("status","@Enum(status)")
                                })
                                .build()
                ]
}