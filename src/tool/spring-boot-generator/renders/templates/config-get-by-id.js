   // getById
   new builder()
   .type("select")
   .id("get@nameBy@key")
   .includes(collection=>{
           collection.includes(@sname.columnsArray)
   })
   .conditions(collection =>{
           collection.includes("@skey")
                     .require("@skey")
   })
   .controller(controller => {
           controller.path("/@sname/{@skey}");
   })
@req
   .req(req => {
           req.name("@skey")
              .type("Integer")
              .from("@PathVariable");
   })
   .resp(resp => {
           resp.single();
   })
   .build(),