const { init } = require("./initializer")
const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/dc/all");

const SETTLE = {
   project: "",
   root: "",
}

const FC = {
   project: "",
   root: "",
}

const ZD = {
   project: "ZDSystem",
   root: "C:/Users/Administrator/Desktop/Projects/业务开发项目_研发一/千行收银台/syt_system_web",
   abbrOfProject: "zd"
}

const ORDER_COMPARE = {
   project: "CompareManage",
   root: "F:/业务开发项目_研发一/web/CompareManage",
   abbrOfProject: "order_compare"
}

const _18 = {
   project: "MatchingRecharge",
   root: "F:/业务开发项目_研发一/18充值系统/web",
   abbrOfProject: "18"
}

const DC = {
   project: "DaiChong",
   root: "F:/业务开发项目_研发一/代充系统/Management",
   abbrOfProject: "dc"
}


function test() {
   let config = {
      delete: true,
      add: true,
      project: "DaiChong",
      root: "F:/业务开发项目_研发一/代充系统/Management",
      abbrOfProject: "dc",
      edit: true,
   }
   init(all.dcVirtualSection, config);
}

test();