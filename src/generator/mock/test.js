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
          code:100,
          msg:"send vcode success",
          coopId:"1",
          pno:"2015"
    },
    coopOrder:"201502155454545"
}

var submitResult={
     code:100,
     msg:"submit success"
}


function main() {
      let buidler = new HandlerCollectionBuilder();
      let handlers = buidler.handler("*", "get", result)
            .handler("/getvcode", "post",vcodeResult)
            .handler("/submit","post",submitResult)
            .build();

      let server = new MockServer();
      server.run(8083, handlers);
}

main();