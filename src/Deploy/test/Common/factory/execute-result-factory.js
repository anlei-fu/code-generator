const { ExecuteResultFactory } = require("./../../../common/factory/ExecuteResultFactory");
const {FILE} =require("./../../../common/utils/file");

function test() {
  let result= ExecuteResultFactory.jsSuccessed("cmd.js");
  FILE.write("1.txt",result.log);


}

/*************************************************test**************************************************************/
test();