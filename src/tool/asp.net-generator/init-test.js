const { init } = require("./initializer")
const {all}=require("../oracle-table-info-resolver/outputs/zd/all")

function test() {
   let config = {
      delete: true,
      add: true,
      project: "zd",
   }
   init(all.upChannelDayStatDiff, config);
}

test();