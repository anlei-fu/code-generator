const { init } = require("./initializer")
const {all}=require("../oracle-table-info-resolver/outputs/order_compare/all")

const SETTLE={
   project:"",
   root:"",
}

const FC={
   project:"",
   root:"",
}

const ZD={
   project:"ZDSystem",
   root:"C:/Users/Administrator/Desktop/Projects/业务开发项目_研发一/千行收银台/syt_system_web",
   abbrOfProject:"zd"
}

const ORDER_COMPARE={
   project:"CompareManage",
   root:"F:/业务开发项目_研发一/web/CompareManage",
   abbrOfProject:"order_compare"
}


function test() {
   let config = {
      delete: true,
      add: true,
      project: ORDER_COMPARE.project,
      root:ORDER_COMPARE.root,
      abbrOfProject:ORDER_COMPARE.abbrOfProject,
      edit:true,
   }
   init(all.dzAutoDealConfig, config);
}

test();