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
    cuvreDirection: {
      name: "cuvreDirection",
      description: "曲线方向",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    cuvreLength: {
      name: "cuvreLength",
      description: "曲线长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    cuvreReadius: {
      name: "cuvreReadius",
      description: "曲线半径",
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
    trackDivision: {
      name: "trackDivision",
      description: "工务段编号",
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
  "curveId",
  "cuvreDirection",
  "cuvreLength",
  "cuvreReadius",
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
  "trackDivision",
  "updateTime"
];

function create() {
  return {
  averageSpeed: 258,
  createTime: "2019-11-16 2:3:41",
  curveId: 596,
  cuvreDirection: 330,
  cuvreLength: 390,
  cuvreReadius: 510,
  direction: 776,
  endMiles: 535,
  endSlowLength: 483,
  endTangentLength: 891,
  isDelete: 126,
  lineId: 199,
  longChain: 664,
  operator: 580,
  overHeight: 745,
  remark: "备注502",
  side: 62,
  slopeRate: 270,
  startMiles: 923,
  startSlowLength: 162,
  startTangentLength: 675,
  status: 733,
  steeringAngle: 51,
  trackDisType: 392,
  trackDisWide: 487,
  trackDivision: 539,
  updateTime: "2019-12-16 2:3:41"
};
}

curveInfo.columnsArray=columnsArray;
curveInfo.create=create;
module.exports=curveInfo;