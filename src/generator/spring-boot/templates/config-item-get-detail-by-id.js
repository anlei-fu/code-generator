
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
                                        request.path("/@sname/detail/{@skey}");
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