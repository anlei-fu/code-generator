let curveInfo = {
  name: "curveInfo",
  description: "曲线信息",
  columns: {
    averageSpeed: {
      name: "averageSpeed",
      description: "平均速度",
      nullable: true,
      type: {
        name: "float"
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
    curveDirection: {
      name: "curveDirection",
      description: "鏇茬嚎鏂瑰悜",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    curveId: {
      name: "curveId",
      description: "曲线编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    curveReadius: {
      name: "curveReadius",
      description: "鏇茬嚎鍗婂緞",
      nullable: true,
      type: {
        name: "float"
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
      description: "缁堢偣閲岀▼",
      nullable: true,
      type: {
        name: "float",
        length: null
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
    endTangentLength: {
      name: "endTangentLength",
      description: "终点切线长",
      nullable: true,
      type: {
        name: "float"
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
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    slopeRate: {
      name: "slopeRate",
      description: "顺坡率",
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
    startSlowLength: {
      name: "startSlowLength",
      description: "起缓和线长",
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
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
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
    trackDivisionId: {
      name: "trackDivisionId",
      description: "宸ュ姟娈电紪鍙?",
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
    }
  }
};

let columnsArray = [
  "averageSpeed",
  "createTime",
  "curveDirection",
  "curveId",
  "curveLength",
  "curveReadius",
  "direction",
  "endMiles",
  "endSlowLength",
  "endTangentLength",
  "isDelete",
  "lineId",
  "longChain",
  "operator",
  "overHeight",
  "remark",
  "side",
  "slopeRate",
  "startMiles",
  "startSlowLength",
  "startTangentLength",
  "status",
  "steeringAngle",
  "trackDisType",
  "trackDisWide",
  "trackDivisionId",
  "updateTime"
];

function create() {
  return {
  averageSpeed: 450,
  createTime: "2019-12-17 :3:35",
  curveDirection: 97,
  curveId: 15,
  curveLength: 400,
  curveReadius: 261,
  direction: 615,
  endMiles: 335,
  endSlowLength: 97,
  endTangentLength: 882,
  isDelete: 725,
  lineId: 345,
  longChain: 351,
  operator: 251,
  overHeight: 804,
  remark: "备注929",
  side: 182,
  slopeRate: 499,
  startMiles: 46,
  startSlowLength: 431,
  startTangentLength: 177,
  status: 885,
  steeringAngle: 440,
  trackDisType: 471,
  trackDisWide: 678,
  trackDivisionId: 376,
  updateTime: "2019-12-16 :3:35"
};
}

curveInfo.columnsArray=columnsArray;
curveInfo.create=create;
module.exports=curveInfo;