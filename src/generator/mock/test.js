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


function main() {
      let buidler = new HandlerCollectionBuilder();
      let handlers = buidler.handler("*", "get", result)
            .handler("/ContractInfo/Add", "post", SUCCESS_RESULT)
            .build();

      let server = new MockServer();
      server.run(8084, handlers);
}

main();