const { userSignSeal } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userSignSealConfig = {
        table: userSignSeal,
        name: "UserSignSeal",
                items: [

                        // add
                        // belongType : validate --- @Enum("belongType")  
                        // createTime excluded 
                        // id excluded
                        new builder()
                                .type("insert")
                                .id("addUserSignSeal")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime","id"])
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                })
                                .build(),

                        // deleteById
                        new builder()
                                .type("delete")
                                .id("deleteUserSignSealById")
                                .alias("t")
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .build(),
                                
                        // updateById
                        // belongType : validate --- @Enum("belongType")  
                        // createTime : excluded
                        new builder()
                                .type("update")
                                .id("updateUserSignSealById")
                                .alias("t")
                                .includes(collection => {
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])

                                })
                                .conditions(collection => {
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal/{id}");
                                })
                                .req(req => {
                                        req.name("id")
                                           .type("Integer")
                                           .from("@PathVariable");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserSignSealById")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userSignSeal.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("id")
                                                  .require("id")
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal/{id}");
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
                        // belongType : validates --- @Enum("belongType")  
                        // createTime : expression --- timeRange
                        // signName : excluded 
                        // signPic : excluded
                        new builder()
                                .type("select")
                                .id("getUserSignSealList")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(userSignSeal.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["signName","signPic"])
                                                  .exp("createTime","timeRange")
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(\"belongType\")")
                                })

                                .build()
                ]
}
