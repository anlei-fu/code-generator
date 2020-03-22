const { init } = require("./initializer")
const {all}=require("../oracle-table-info-resolver/outputs/18/all")

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

const _18={
   project:"MatchingRecharge",
   root:"F:/业务开发项目_研发一/18充值系统/web",
   abbrOfProject:"18"
}


function test() {
   let config = {
      delete: true,
      add: true,
      project: _18.project,
      root:_18.root,
      abbrOfProject:_18.abbrOfProject,
      edit:true,
   }
   init(all.stDownChannel, config);
}

test();