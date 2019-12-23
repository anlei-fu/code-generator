let lineInfo = {
  name: "lineInfo",
  description: "线路信息",
  columns: {
    id: {
      name: "id",
      description: "线路编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    fullName: {
      name: "fullName",
      description: "线路全称",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    shortName: {
      name: "shortName",
      description: "线路简称",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    lineCode: {
      name: "lineCode",
      description: "线路编码",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    nature: {
      name: "nature",
      description: "线路性质",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    grade: {
      name: "grade",
      description: "线路等级",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackType: {
      name: "trackType",
      description: "轨道类型",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    tractionType: {
      name: "tractionType",
      description: "牵引类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    gaugeType: {
      name: "gaugeType",
      description: "轨距类型",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    minRadiusCurve: {
      name: "minRadiusCurve",
      description: "最小曲线半径",
      nullable: true,
      type: {
        name: "float"
      }
    },
    yearVolume: {
      name: "yearVolume",
      description: "年运量(万吨)",
      nullable: true,
      type: {
        name: "float"
      }
    },
    lineNum: {
      name: "lineNum",
      description: "正线数目",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    ballastType: {
      name: "ballastType",
      description: "道床类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    operateType: {
      name: "operateType",
      description: "运营类型",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    lineBranches: {
      name: "lineBranches",
      description: "线路干支",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: null
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
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "fullName",
  "shortName",
  "lineCode",
  "inputCode",
  "nature",
  "grade",
  "trackType",
  "distance",
  "tractionType",
  "gaugeType",
  "limitGrad",
  "minRadiusCurve",
  "yearVolume",
  "lineNum",
  "ballastType",
  "operateType",
  "commissioningDate",
  "lineBranches",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 606,
  fullName: "线路全称418",
  shortName: "线路简称341",
  lineCode: "线路编码941",
  inputCode: "输入代码635",
  nature: 191,
  grade: 889,
  trackType: 967,
  distance: 693,
  tractionType: 724,
  gaugeType: 94,
  limitGrad: 899,
  minRadiusCurve: 966,
  yearVolume: 833,
  lineNum: 728,
  ballastType: 379,
  operateType: 706,
  commissioningDate: "2019-12-30 1:3:35",
  lineBranches: 44,
  status: 775,
  isDelete: 278,
  createTime: "2019-12-23 1:3:35",
  updateTime: "2019-12-22 1:3:35",
  operator: 824
};
}

lineInfo.columnsArray=columnsArray;
lineInfo.create=create;
module.exports=lineInfo;