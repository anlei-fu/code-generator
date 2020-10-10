const { MockServer, HandlerCollectionBuilder } = require("./mock-server")

const SUCCESS_RESULT = { Status: true, Message: "ok" };

var result = {
      code:100,
      msg:"ok",
      data:{
            total: 10,
            list: [
                  
            ]
      }
}

var vcodeResult={
    core:{
          code:0,
          msg:"send vcode success",
          coopId:"1",
          pno:"2015"
    },
    coopOrder:"201502155454545"
}

var submitResult={
     code:100,
     status:1,
     msg:"submit success"
}


async function  main() {
      try{
      let buidler = new HandlerCollectionBuilder();
      let handlers = buidler.handler("/Mobile5gNew/getvcode", "post",vcodeResult)
            .handler("/Mobile5gNew/SubmitOrder","post",submitResult)
            .build();

      let server = new MockServer();
    await  server.run(8083, handlers);
      }catch(ex){
            let t=0;
      }
}

main();