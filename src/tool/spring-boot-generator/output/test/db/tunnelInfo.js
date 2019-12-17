let tunnelInfo = {
  name: "tunnelInfo",
  description: "隧道信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
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
    id: {
      name: "id",
      description: "隧道编号",
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
      description: "输入码",
      nullable: true,
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
    length: {
      name: "length",
      description: "全长",
      nullable: true,
      type: {
        name: "float"
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
    trackDistance: {
      name: "trackDistance",
      description: "轨距",
      nullable: true,
      type: {
        name: "float"
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
    tunneName: {
      name: "tunneName",
      description: "隧道名",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    tunneNo: {
      name: "tunneNo",
      description: "隧道号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
  "createTime",
  "direction",
  "endMiles",
  "id",
  "inputCode",
  "isDelete",
  "length",
  "lineId",
  "longChain",
  "middleMiles",
  "operator",
  "remark",
  "side",
  "startMiles",
  "status",
  "trackDistance",
  "trackDivisionId",
  "tunneName",
  "tunneNo",
  "updateTime"
];

function create() {
  return {
  createTime: "2020-1-17 2:3:19",
  direction: 799,
  endMiles: 24,
  id: 535,
  inputCode: "输入码33",
  isDelete: 545,
  length: 521,
  lineId: 740,
  longChain: 633,
  middleMiles: 347,
  operator: 165,
  remark: "备注796",
  side: 637,
  startMiles: 818,
  status: 914,
  trackDistance: 796,
  trackDivisionId: 495,
  tunneName: "隧道名159",
  tunneNo: "隧道号193",
  updateTime: "2020-1-17 2:3:19"
};
}

tunnelInfo.columnsArray=columnsArray;
tunnelInfo.create=create;
module.exports=tunnelInfo;