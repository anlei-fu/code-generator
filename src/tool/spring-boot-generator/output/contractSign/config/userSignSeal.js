const { userSignSeal } = require("./../db/main")
const { builder } = require("./../../../builders/builder")


exports.userSignSealConfig = {
        table: userSignSeal,
        name: "UserSignSeal",
                items: [

                        // add
                        // id : validate --- @NotNull  
                        // createTime excluded
                        new builder()
                                .type("insert")
                                .id("addUserSignSeal")
                                .includes(collection => {
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["createTime"])
                                })
                                .controller(controller => {
                                        controller.path("/userSignSeal");
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
                                .id("deleteUserSignSealById")
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
                        // belongType : validate --- @Enum(belongType)
                        new builder()
                                .type("update")
                                .id("updateUserSignSealById")
                                .includes(collection => {
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")

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
                                           .validate("belongType","@Enum(belongType)")
                                })
                                .build(),

                        // getById
                        new builder()
                                .type("select")
                                .id("getUserSignSealById")
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
                        // belongType : validates --- @Enum(belongType)  
                        // signName : excluded 
                        // signPic : excluded 
                        // createTime : expression --- timeRange
                        new builder()
                                .type("select")
                                .includes(collection=>{
                                        collection.includes(userSignSeal.columnsArray)
                                })
                                .conditions(collection=>{
                                        collection.includes(userSignSeal.columnsArray)
                                                  .excludes("id")
                                                  .excludes(["signName","signPic"])
                                                  .expression("createTime","timeRange")
                                })
                                .id("getUserSignSealList")
                                .controller(controller => {
                                        controller.path("/userSignSeal");
                                })
                                .req(req => {
                                        req.doCreate()
                                           .excludes("id")
                                           .validate("belongType","@Enum(belongType)")
                                })
                                .build()
                ]
}