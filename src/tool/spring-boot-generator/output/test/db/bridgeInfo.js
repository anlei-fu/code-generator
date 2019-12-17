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
  bridgeLength: 348,
  bridgeName: "桥名380",
  bridgeNo: "桥号18",
  createTime: "2019-12-16 :3:35",
  crossHoleStyle: "孔跨样式407",
  direction: 584,
  endMiles: 731,
  flyoverCategory: "立交类别734",
  holeLength: 178,
  id: 168,
  isDelete: 212,
  lineId: 465,
  longChain: 335,
  middleMiles: 1,
  operator: 135,
  remark: "备注615",
  side: 37,
  startMiles: 211,
  status: 15,
  trackDivisionId: 221,
  trackWeigth: 893,
  updateTime: "2019-11-17 :3:35"
};
}

bridgeInfo.columnsArray=columnsArray;
bridgeInfo.create=create;
module.exports=bridgeInfo;