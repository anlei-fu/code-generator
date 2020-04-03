const {MockServer,HandlerCollectionBuilder} =require("./mock-server")

const SUCCESS_RESULT={Status:true,Message:"ok"};

function main(){
      let buidler =new HandlerCollectionBuilder();
      let handlers=  buidler.handler("*","post",SUCCESS_RESULT)
                            .handler("/post","post",SUCCESS_RESULT)
                            .build();

      let server =new MockServer();
      server.run(8083,handlers);
}

main();