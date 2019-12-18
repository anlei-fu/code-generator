let lineInfo = {
  name: "lineInfo",
  description: "线路信息",
  columns: {
    ballastType: {
      name: "ballastType",
      description: "道床类别",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    commissioningDate: {
      name: "commissioningDate",
      description: "投产日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    distance: {
      name: "distance",
      description: "线路里程",
      nullable: true,
      type: {
        name: "float"
      }
    },
    fullName: {
      name: "fullName",
      description: "线路全称",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    gaugeType: {
      name: "gaugeType",
      description: "轨距类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    grade: {
      name: "grade",
      description: "线路等级",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    id: {
      name: "id",
      description: "线路编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: false,
      type: {
        name: "varchar",
        length: 16
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    limitGrad: {
      name: "limitGrad",
      description: "限制坡度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    lineBranches: {
      name: "lineBranches",
      description: "线路干支",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    lineCode: {
      name: "lineCode",
      description: "线路编码",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    lineNum: {
      name: "lineNum",
      description: "正线数目",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    minRadiusCurve: {
      name: "minRadiusCurve",
      description: "最小曲线半径",
      nullable: true,
      type: {
        name: "float"
      }
    },
    nature: {
      name: "nature",
      description: "线路性质",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    operateType: {
      name: "operateType",
      description: "运营类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    shortName: {
      name: "shortName",
      description: "线路简称",
      nullable: false,
      type: {
        name: "varchar",
        length: 64
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    trackType: {
      name: "trackType",
      description: "轨道类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    tractionType: {
      name: "tractionType",
      description: "牵引类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    yearVolume: {
      name: "yearVolume",
      description: "年运量(万吨)",
      nullable: true,
      type: {
        name: "float"
      }
    }
  }
};

let columnsArray = [
  "ballastType",
  "commissioningDate",
  "createTime",
  "distance",
  "fullName",
  "gaugeType",
  "grade",
  "id",
  "inputCode",
  "isDelete",
  "limitGrad",
  "lineBranches",
  "lineCode",
  "lineNum",
  "minRadiusCurve",
  "nature",
  "operateType",
  "operator",
  "shortName",
  "status",
  "trackType",
  "tractionType",
  "updateTime",
  "yearVolume"
];

function create() {
  return {
  ballastType: 783,
  commissioningDate: "2019-11-18 1::37",
  createTime: "2020-1-18 1::37",
  distance: 674,
  fullName: "线路全称666",
  gaugeType: 984,
  grade: 998,
  id: 850,
  inputCode: "输入代码530",
  isDelete: 126,
  limitGrad: 551,
  lineBranches: 790,
  lineCode: "线路编码641",
  lineNum: 86,
  minRadiusCurve: 98,
  nature: 469,
  operateType: 74,
  operator: 980,
  shortName: "线路简称969",
  status: 938,
  trackType: 946,
  tractionType: 130,
  updateTime: "2019-11-18 1::37",
  yearVolume: 885
};
}

lineInfo.columnsArray=columnsArray;
lineInfo.create=create;
module.exports=lineInfo;