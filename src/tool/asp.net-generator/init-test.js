const { init } = require("./initializer")
const {all}=require("../oracle-table-info-resolver/outputs/fd/qy/all")

function test() {
   let config = {
      delete: true,
      add: true,
      project: "SettleAccount",
   }
   init(all.qyBaseDownChannel, config);
}

test();