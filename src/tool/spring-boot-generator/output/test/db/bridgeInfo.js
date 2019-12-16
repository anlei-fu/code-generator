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
        length: 64
      }
    },
    bridgeNo: {
      name: "bridgeNo",
      description: "桥号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
        length: 32
      }
    },
    direction: {
      name: "direction",
      description: "行别",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 32
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
        length: 11
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
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    longChain: {
      name: "longChain",
      description: "长链标记",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    side: {
      name: "side",
      description: "线别",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "工务段编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  bridgeLength: 233,
  bridgeName: "桥名403",
  bridgeNo: "桥号24",
  createTime: "2019-12-15 2:3:41",
  crossHoleStyle: "孔跨样式8",
  direction: 114,
  endMiles: 597,
  flyoverCategory: "立交类别575",
  holeLength: 697,
  id: 85,
  isDelete: 126,
  lineId: 882,
  longChain: 323,
  middleMiles: 737,
  operator: 122,
  remark: "备注559",
  side: 871,
  startMiles: 784,
  status: 953,
  trackDivisionId: 254,
  trackWeigth: 337,
  updateTime: "2019-12-16 2:3:41"
};
}

bridgeInfo.columnsArray=columnsArray;
bridgeInfo.create=create;
module.exports=bridgeInfo;