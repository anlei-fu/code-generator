
                        // get detail by id
                        new ConfigItemBuilder()
                                .type("select")
                                .id("getDetailBy@selectMethodName")
                                .alias("t")
                                .includes(collection=>{
                                        collection.includes(all.@sname.columnsArray)
                                })
                                .conditions(collection =>{
                                        collection.includes("@skey")
                                                  .require("@skey")
                                })
@joins
                                .request(request => {
                                        request.path("detail/{@skey}")
                                               .description("get single @sname with additional details");;
                                })
                                .req(req => {
                                        req.name("@skey")
                                           .type("@keyType")
                                           .from("@PathVariable");
                                 })
                                .resp(resp => {
                                        resp.doCreate()
                                        .name("@tnameDetailResp")
                                        .single()
                                        .build()
                                })
@selectUserReq@@         
                                           
                                .build(),

