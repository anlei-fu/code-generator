let bridgeInfo = {
  name: "bridgeInfo",
  description: "桥梁信息",
  columns: {
    bridgeLength: {
      name: "bridgeLength",
      description: "桥全长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    bridgeName: {
      name: "bridgeName",
      description: "桥名",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    bridgeNo: {
      name: "bridgeNo",
      description: "桥号",
      nullable: true,
      type: {
        name: "varchar",
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
    crossHoleStyle: {
      name: "crossHoleStyle",
      description: "孔跨样式",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    direction: {
      name: "direction",
      description: "行别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    endMiles: {
      name: "endMiles",
      description: "终点里程",
      nullable: true,
      type: {
        name: "float"
      }
    },
    flyoverCategory: {
      name: "flyoverCategory",
      description: "立交类别",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    holeLength: {
      name: "holeLength",
      description: "桥孔总长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    id: {
      name: "id",
      description: "桥梁编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
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
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    longChain: {
      name: "longChain",
      description: "长链标记",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    middleMiles: {
      name: "middleMiles",
      description: "中心里程",
      nullable: true,
      type: {
        name: "float"
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
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    side: {
      name: "side",
      description: "线别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    startMiles: {
      name: "startMiles",
      description: "起点里程",
      nullable: true,
      type: {
        name: "float"
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
    trackDivisionId: {
      name: "trackDivisionId",
      description: "工务段编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackWeigth: {
      name: "trackWeigth",
      description: "轨距",
      nullable: true,
      type: {
        name: "float"
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "bridgeLength",
  "bridgeName",
  "bridgeNo",
  "createTime",
  "crossHoleStyle",
  "direction",
  "endMiles",
  "flyoverCategory",
  "holeLength",
  "id",
  "isDelete",
  "lineId",
  "longChain",
  "middleMiles",
  "operator",
  "remark",
  "side",
  "startMiles",
  "status",
  "trackDivisionId",
  "trackWeigth",
  "updateTime"
];

function create() {
  return {
  bridgeLength: 806,
  bridgeName: "桥名21",
  bridgeNo: "桥号171",
  createTime: "2019-12-26 1:4:50",
  crossHoleStyle: "孔跨样式862",
  direction: 34,
  endMiles: 629,
  flyoverCategory: "立交类别805",
  holeLength: 306,
  id: 154,
  isDelete: 252,
  lineId: 507,
  longChain: 452,
  middleMiles: 735,
  operator: 476,
  remark: "备注556",
  side: 871,
  startMiles: 58,
  status: 636,
  trackDivisionId: 462,
  trackWeigth: 535,
  updateTime: "2019-11-19 1:4:50"
};
}

bridgeInfo.columnsArray=columnsArray;
bridgeInfo.create=create;
module.exports=bridgeInfo;