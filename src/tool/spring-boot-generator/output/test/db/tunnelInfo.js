let tunnelInfo = {
  name: "tunnelInfo",
  description: "隧道信息",
  columns: {
    id: {
      name: "id",
      description: "隧道编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    tunneNo: {
      name: "tunneNo",
      description: "隧道号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    tunneName: {
      name: "tunneName",
      description: "隧道名",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入码",
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
    trackDistance: {
      name: "trackDistance",
      description: "轨距",
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
    length: {
      name: "length",
      description: "全长",
      nullable: true,
      type: {
        name: "float"
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
  "tunneNo",
  "tunneName",
  "inputCode",
  "trackDivisionId",
  "lineId",
  "side",
  "direction",
  "trackDistance",
  "startMiles",
  "endMiles",
  "middleMiles",
  "length",
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
  id: 787,
  tunneNo: "隧道号232",
  tunneName: "隧道名867",
  inputCode: "输入码677",
  trackDivisionId: 437,
  lineId: 141,
  side: 147,
  direction: 280,
  trackDistance: 189,
  startMiles: 982,
  endMiles: 80,
  middleMiles: 459,
  length: 254,
  longChain: 686,
  remark: "备注13",
  status: 385,
  isDelete: 62,
  createTime: "2019-11-23 1:3:35",
  updateTime: "2019-12-23 1:3:35",
  operator: 410
};
}

tunnelInfo.columnsArray=columnsArray;
tunnelInfo.create=create;
module.exports=tunnelInfo;