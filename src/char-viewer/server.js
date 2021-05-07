const { RestService } = require("./../http");
const {DataController} =require("./controller");

function main(){
     let service = new RestService(10056,[new DataController()],"./");
     service.init();
     service.start();
     
}

/**********************************************main********************************* */
main();