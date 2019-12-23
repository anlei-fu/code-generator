let bridgeInfo = {
  name: "bridgeInfo",
  description: "桥梁信息",
  columns: {
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
    bridgeNo: {
      name: "bridgeNo",
      description: "桥号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
    trackDivisionId: {
      name: "trackDivisionId",
      description: "工务段编号",
      nullable: true,
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
    side: {
      name: "side",
      description: "线别",
      nullable: true,
      type: {
        name: "int",
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
    trackWeigth: {
      name: "trackWeigth",
      description: "轨距",
      nullable: true,
      type: {
        name: "float"
      }
    },
    bridgeLength: {
      name: "bridgeLength",
      description: "桥全长",
      nullable: true,
      type: {
        name: "float"
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
    endMiles: {
      name: "endMiles",
      description: "终点里程",
      nullable: true,
      type: {
        name: "float"
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
    holeLength: {
      name: "holeLength",
      description: "桥孔总长",
      nullable: true,
      type: {
        name: "float"
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
    flyoverCategory: {
      name: "flyoverCategory",
      description: "立交类别",
      nullable: true,
      type: {
        name: "varchar",
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
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
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
  "bridgeNo",
  "bridgeName",
  "trackDivisionId",
  "lineId",
  "side",
  "direction",
  "trackWeigth",
  "bridgeLength",
  "startMiles",
  "endMiles",
  "middleMiles",
  "holeLength",
  "crossHoleStyle",
  "flyoverCategory",
  "longChain",
  "remark",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 716,
  bridgeNo: "桥号963",
  bridgeName: "桥名447",
  trackDivisionId: 107,
  lineId: 17,
  side: 765,
  direction: 494,
  trackWeigth: 856,
  bridgeLength: 788,
  startMiles: 407,
  endMiles: 968,
  middleMiles: 315,
  holeLength: 310,
  crossHoleStyle: "孔跨样式458",
  flyoverCategory: "立交类别651",
  longChain: 743,
  remark: "备注217",
  status: 794,
  isDelete: 352,
  createTime: "2019-12-22 1:3:35",
  updateTime: "2020-1-23 1:3:35",
  operator: 385
};
}

bridgeInfo.columnsArray=columnsArray;
bridgeInfo.create=create;
module.exports=bridgeInfo;