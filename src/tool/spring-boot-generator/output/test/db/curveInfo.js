let curveInfo = {
  name: "curveInfo",
  description: "曲线信息",
  columns: {
    curveId: {
      name: "curveId",
      description: "曲线编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "宸ュ姟娈电紪鍙?",
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
      description: "缁堢偣閲岀▼",
      nullable: true,
      type: {
        name: "float",
        length: null
      }
    },
    curveDirection: {
      name: "curveDirection",
      description: "鏇茬嚎鏂瑰悜",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    curveReadius: {
      name: "curveReadius",
      description: "鏇茬嚎鍗婂緞",
      nullable: true,
      type: {
        name: "float"
      }
    },
    steeringAngle: {
      name: "steeringAngle",
      description: "转向角",
      nullable: true,
      type: {
        name: "float"
      }
    },
    trackDisType: {
      name: "trackDisType",
      description: "轨距类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackDisWide: {
      name: "trackDisWide",
      description: "轨距加宽",
      nullable: true,
      type: {
        name: "float"
      }
    },
    overHeight: {
      name: "overHeight",
      description: "超高",
      nullable: true,
      type: {
        name: "float"
      }
    },
    slopeRate: {
      name: "slopeRate",
      description: "顺坡率",
      nullable: true,
      type: {
        name: "float"
      }
    },
    startTangentLength: {
      name: "startTangentLength",
      description: "起点切线长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    endTangentLength: {
      name: "endTangentLength",
      description: "终点切线长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    startSlowLength: {
      name: "startSlowLength",
      description: "起缓和线长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    endSlowLength: {
      name: "endSlowLength",
      description: "终缓和线长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    curveLength: {
      name: "curveLength",
      description: "鏇茬嚎闀?",
      nullable: true,
      type: {
        name: "float"
      }
    },
    averageSpeed: {
      name: "averageSpeed",
      description: "平均速度",
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
  "curveId",
  "trackDivisionId",
  "lineId",
  "side",
  "direction",
  "startMiles",
  "endMiles",
  "curveDirection",
  "curveReadius",
  "steeringAngle",
  "trackDisType",
  "trackDisWide",
  "overHeight",
  "slopeRate",
  "startTangentLength",
  "endTangentLength",
  "startSlowLength",
  "endSlowLength",
  "curveLength",
  "averageSpeed",
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
  curveId: 14,
  trackDivisionId: 232,
  lineId: 190,
  side: 108,
  direction: 965,
  startMiles: 63,
  endMiles: 560,
  curveDirection: 83,
  curveReadius: 212,
  steeringAngle: 435,
  trackDisType: 250,
  trackDisWide: 778,
  overHeight: 441,
  slopeRate: 24,
  startTangentLength: 206,
  endTangentLength: 27,
  startSlowLength: 974,
  endSlowLength: 925,
  curveLength: 363,
  averageSpeed: 541,
  longChain: 929,
  remark: "备注282",
  status: 473,
  isDelete: 577,
  createTime: "2020-1-23 1:3:35",
  updateTime: "2020-1-23 1:3:35",
  operator: 223
};
}

curveInfo.columnsArray=columnsArray;
curveInfo.create=create;
module.exports=curveInfo;