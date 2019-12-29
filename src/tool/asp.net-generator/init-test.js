const { init } = require("./initializer")
const { FILE } = require("../../libs/file")
const {tables}=require("../oracle-table-info-resolver/outputs/fd/tables")

function test() {
   let config = {
      delete: true,
      add: true,
      project: "SettleAccount",
   }
   init(tables.qyTradeDownFund, config);
}

test();