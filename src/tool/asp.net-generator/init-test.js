const { init } = require("./initializer")
const {all}=require("../oracle-table-info-resolver/outputs/zd/all")

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


function test() {
   let config = {
      delete: true,
      add: true,
      project: ZD.project,
      root:ZD.root,
      abbrOfProject:ZD.abbrOfProject,
      _delete:true,
      edit:true,
   }
   init(all.userMessageRecord, config);
}

test();